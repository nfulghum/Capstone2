import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../routes/ProtectedRoute';
import Home from '../components/interface/Home';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import Profile from '../components/User/Profile';
import Exercise from '../components/Exercise/Exercise';
import Meal from '../components/Meal/Meal';

const AppRoutes = ({ login, signup }) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login login={login} />} />
                <Route path='/signup' element={<Signup signup={signup} />} />
                <Route path='/exercise' element={<ProtectedRoute><Exercise /></ProtectedRoute>} />
                <Route path='/meal' element={<ProtectedRoute><Meal /></ProtectedRoute>} />
                <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            </Routes>
        </div>
    )
}

export default AppRoutes;