"use strict";

/** Routes for exercises */
const axios = require("axios");

const jsonschema = require("jsonschema");
const express = require("express");
const { BadRequestError } = require("../expressError");
const Meal = require("../models/meal");
const { NUTRITION_API_KEY } = require("../config");


const router = new express.Router();

/** GET / =>  {meals: [
 *                      0: {
 *                      id: num,
 *                      title: text,
 *                      readyInMinutes: num,
 *                      image: text,
 *                      imageUrls: [
 *                          0: text,
 *                          1: text,]}]
 *              nutrients: {
 *                      calories:1988
 *                      protein:55.64
 *                      fat:121.19
 *                      carbohydrates:177.96        
 *                      }}
 * */

router.get("/", async function (req, res, next) {

    let { calories, diet, exclude } = req.body

    const options = {
        method: 'GET',
        url: `https://api.spoonacular.com/mealplanner/generate?apiKey=${NUTRITION_API_KEY}`,
        params: {
            timeFrame: 'day',
            calories,
            diet,
            exclude
        },
    };

    axios.request(options).then(function (response) {
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
})



module.exports = router;
