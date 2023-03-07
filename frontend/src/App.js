import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './components/Auth/UserContext';
import ResolutionApi from './api';
import LoadingSpinner from './components/interface/LoadingSpinner';
import jwt_decode from 'jwt-decode';
import useLocalStorage from './hooks/useLocalStorage';
import AppRoutes from './routes/AppRoutes';
import Navigation from './components/interface/Navigation';

export const TOKEN_STORAGE_ID = 'resolution-token';



function App() {

  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [mealIds, setMealIds] = useState(new Set([]));


  console.debug(
    "App",
    "infoLoaded=", infoLoaded,
    "currentUser=", currentUser,
    "token=", token,
  );

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt_decode(token);
          ResolutionApi.token = token;
          let currentUser = await ResolutionApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setMealIds(new Set(currentUser.meals));
        } catch (e) {
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await ResolutionApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error("signup failed", e)
      return { success: false, e };
    }
  };

  async function login(loginData) {
    try {
      let token = await ResolutionApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (e) {
      return { success: false, e };
    }
  };

  const hasSavedMealPlan = (mealData) => {
    return mealIds.has(mealData);
  };

  const saveMealPlan = (mealData) => {
    if (hasSavedMealPlan(mealData)) return;
    ResolutionApi.saveMealPlan(currentUser.username, mealData);
    setMealIds(new Set([...mealIds, mealData]));
  }

  if (!infoLoaded) return <LoadingSpinner />

  return (

    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser, hasSavedMealPlan, saveMealPlan }}>
        <Navigation logout={logout} />
        <AppRoutes login={login} signup={signup} />
      </UserContext.Provider>
    </BrowserRouter>

  );
}

export default App;
