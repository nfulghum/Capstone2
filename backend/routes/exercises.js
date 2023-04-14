"use strict";

/** Routes for exercises */
const axios = require("axios");

const express = require("express");
const { EXERCISE_API_KEY } = require("../config");


const router = new express.Router();

/** GET 
 *  
 *  Returns a list of 10 exercises based on query put in by user
*/

router.post("/", async function (req, res, next) {

    let { name, type, muscle, difficulty } = req.body

    try {
        const response = await axios.get("https://api.api-ninjas.com/v1/exercises", {
            params: {
                name,
                type,
                muscle,
                difficulty,
            },
            headers: {
                'X-API-Key': EXERCISE_API_KEY,
            }
        });

        res.json(response.data);
    } catch (err) {
        if (err.response) {
            const { status, data: { message } } = err.response;
            res.status(status).json({ err: message });
        } else if (err.request) {
            throw new InternalServerError('API request failed');
        } else {
            next(err);
        }
    }

})


module.exports = router;