import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Profile from '../components/Profile';
import Exercise from '../components/Exercise';
import ExerciseCategory from '../components/ExerciseCategory';
import ExerciseInfo from '../components/ExerciseInfo';
import Nutrition from '../components/Nutrition';
import NutritionPlan from '../components/NutritionPlan';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/exercise' element={<Exercise />} />
                <Route path='/exercise/:handle' element={<ExerciseCategory />} />
                <Route path='/exercise/:handle/info' element={<ExerciseInfo />} />
                <Route path='/nutrition' element={<Nutrition />} />
                <Route path='/nutrition/:handle' element={<NutritionPlan />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </div>
    )
}

export default AppRoutes;