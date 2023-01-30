"use strict";

/** Routes for exercises */
const axios = require("axios");

const express = require("express");
const { ensureCorrectUserOrAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const { EXERCISE_API_KEY } = require("../config");


const router = new express.Router();

/** GET / => {0: "back", 1: "cardio", 2: "chest", etc} 
 *  
 *  Returns a list of all body parts
 * 
 * 
*/

router.get("/", async function (req, res, next) {
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
            'X-RapidAPI-Key': EXERCISE_API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})

/** GET list of exercises by body part
 *  
 *  
 * 
*/

router.get("/:bodyPart", async function (req, res, next) {
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${req.params.bodyPart}`,
        headers: {
            'X-RapidAPI-Key': EXERCISE_API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})

module.exports = router;