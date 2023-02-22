"use strict";

const db = require("../db");
const {
    NotFoundError,
} = require("../expressError");


class Meal {

    static async save() {

        const result = await db.query(
            `INSERT INTO
                meal_plan
                    (
                        meal_id,
                        title,
                        ready_in_minutes,
                        servings,
                        source_url,
                    )
                    VALUES
                        ($1, $2, $3, $4, $5)
                    RETURNING meal_plan_id
                    `,
            [meal_id, title, ready_in_minutes, servings, source_url]
        );

        const mealPlan = result.rows[0];

        return mealPlan;
    }

    static async remove(id) {
        const result = await db.query(
            `DELETE
            FROM meal_plan
            WHERE id = $1
            RETURNING id`, [id]
        );

        const mealPlan = result.rows[0];

        if (!mealPlan) throw new NotFoundError(`No meal plan: ${id}`)
    }

}

module.exports = Meal