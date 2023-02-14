import React, { useState, useEffect } from 'react';
import ResolutionApi from '../../api';

const MealPlan = ({ meal }) => {

    const [imageUrl, setImageUrl] = useState("")


    return (
        <article>
            <h1>{meal.title}</h1>
            <img src={imageUrl} alt="recipe" />
            <ul className="instructions">
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>

            <a href={meal.sourceUrl}>Go to Recipe</a>
        </article>
    )
}

export default MealPlan;