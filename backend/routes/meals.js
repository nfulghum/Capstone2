"use strict";

/** Routes for exercises */
const axios = require("axios");

const express = require("express");
const { InternalServerError } = require("../expressError");
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
 * 
 *  returns a meal plan for 1 day based on the users inputs (calories, diet, restrictions)
 * */

router.post("/", async function (req, res, next) {

    // extract query params from the request body
    let { calories, diet, exclude } = req.body

    try {
        // using axios to make a GET request to external API
        const response = await axios.get("https://api.spoonacular.com/mealplanner/generate", {
            params: {
                apiKey: NUTRITION_API_KEY,
                timeFrame: "day",
                targetCalories: calories,
                diet,
                exclude,
            },
        });

        // if successful return the response data
        res.json(response.data);

    } catch (err) {
        return next(err);
    }

})



module.exports = router;
