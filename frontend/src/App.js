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


  if (!infoLoaded) return <LoadingSpinner />

  return (

    <BrowserRouter>
    // Share userContext with all child components, allowing access to the current user and ability to update the user state
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        // logout pass down as a prop to enable the user to log out of their session.
        <Navigation logout={logout} />
        // login, signup passed as props which allows user auth and registration
        <AppRoutes login={login} signup={signup} />
      </UserContext.Provider>
    </BrowserRouter>

  );
}

export default App;
