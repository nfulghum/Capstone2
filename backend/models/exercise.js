"use strict";

const db = require("../db");
const { sqlForPartialUpdate } = require("../helpers/sql");
const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
} = require("../expressError");

class Exercise {
    static async createBodyPartList(data) {
        const bodyPartRes = await db.query(
            `INSERT INTO bodyParts (name)
             VALUES ($1)
             RETURNING id, name`,
            [data.name]
        );

        let bodyPart = bodyPartRes.rows[0];

        return bodyPart;
    }
}