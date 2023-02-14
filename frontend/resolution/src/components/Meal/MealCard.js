import React from 'react'
import MealPlan from './MealPlan';

const MealCard = ({ mealData }) => {

    const nutrients = mealData.nutrients;

    return (
        <main>
            <section className="nutrients">
                <h1>Macros</h1>
                <ul>
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Fat: {nutrients.fat.toFixed(0)}</li>
                    <li>Protein: {nutrients.protein.toFixed(0)}</li>
                </ul>
            </section>

            <section className="meals">
                {mealData.meals.map(meal => {
                    return <MealPlan key={meal.id} meal={meal} />
                })}
            </section>
        </main>
    )
}

export default MealCard;