"use strict";

const db = require("../db");
const {
    NotFoundError,
} = require("../expressError");


class Meal {

    static async create(id, title, ready_in_minutes, servings, source_url) {

        const result = await db.query(
            `INSERT INTO
                meal
                    (
                        meal_id,
                        title,
                        ready_in_minutes,
                        servings,
                        source_url,
                    )
                    VALUES
                        ($1, $2, $3, $4, $5)
                    RETURNING meal_id AS "id", title, ready_in_minutes, servings, source_url
                    `,
            [id, title, ready_in_minutes, servings, source_url]
        );

        const mealPlan = result.rows[0];

        if (!mealPlan) throw new NotFoundError(`No meal plan: ${mealPlan}`);

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