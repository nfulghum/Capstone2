"use strict";

const db = require("../db");
const { sqlForPartialUpdate } = require("../helpers/sql");
const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
} = require("../expressError");


class Meal {

    static async create(data) {
        const result = await db.query(
            `INSERT INTO
                meal_plan
                    (
                        meal_id,
                        title,
                        image_type,
                        ready_in_minutes,
                        servings,
                        source_url,
                        meal_plan_id
                    )
                    VALUES
                        ($1, $2, $3, $4, $5, $6, $7)
                    RETURNING meal_plan_id
                    `,
            [meal_id, title, image_type, ready_in_minutes, servings, source_url, meal_plan_id]
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