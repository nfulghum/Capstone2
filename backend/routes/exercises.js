"use strict";

/** Routes for exercises */
const axios = require("axios");

const express = require("express");
const { EXERCISE_API_KEY } = require("../config");


const router = new express.Router();

/** GET / => {0: "back", 1: "cardio", 2: "chest", etc} 
 *  
 *  Returns a list of all body parts
*/

router.post("/", async function (req, res, next) {

    let { name, type, muscle, difficulty } = req.body

    const options = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/exercises',
        params: {
            name,
            type,
            muscle,
            difficulty,
        },
        headers: {
            'X-API-Key': EXERCISE_API_KEY,
        }
    };

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });

})


module.exports = router;