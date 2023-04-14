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

    let { calories, diet, exclude } = req.body

    try {
        const response = await axios.get("https://api.spoonacular.com/mealplanner/generate", {
            params: {
                apiKey: NUTRITION_API_KEY,
                timeFrame: "day",
                targetCalories: calories,
                diet,
                exclude,
            },
        });

        const { meals, nutrients } = response.data;

        res.json({ meals, nutrients });
    } catch (err) {
        if (err.response) {
            const status = err.response.status;
            const message = err.response.data.message;
            res.status(status).json({ err: message });
        } else if (err.request) {
            throw new InternalServerError('API request failed');
        } else {
            next(err);
        }
    }

})



module.exports = router;
