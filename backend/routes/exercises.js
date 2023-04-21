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

    // extract query params from the request body
    let { name, type, muscle, difficulty } = req.body

    try {
        // using axios make GET request to external API
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

        // if successful return the response data
        res.json(response.data);

    } catch (err) {
        return next(err);
    }
})


module.exports = router;