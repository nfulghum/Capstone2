import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/interface/Home';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import Profile from '../components/User/Profile';
import Exercise from '../components/Exercise/Exercise';
import ExerciseCategory from '../components/Exercise/ExerciseCategory';
import ExerciseInfo from '../components/Exercise/ExerciseInfo';
import Nutrition from '../components/Nutrition/Nutrition';
import NutritionPlan from '../components/Nutrition/NutritionPlan';

const AppRoutes = ({ login, signup }) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login login={login} />} />
                <Route path='/signup' element={<Signup signup={signup} />} />
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