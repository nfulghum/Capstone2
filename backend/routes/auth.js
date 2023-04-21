"use strict";

/** Routes for authentication. */

const jsonschema = require("jsonschema");

const User = require("../models/user");
const express = require("express");
const router = new express.Router();
const { createToken } = require("../helpers/tokens");
const userAuthSchema = require("../schemas/userAuth.json");
const userRegisterSchema = require("../schemas/userRegister.json");
const { BadRequestError } = require("../expressError");

/** POST /auth/token:  { username, password } => { token }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

router.post("/token", async function (req, res, next) {
  try {

    // validate the request body against userAuthSchema
    const validator = jsonschema.validate(req.body, userAuthSchema);

    // if it fails throw error with details of the error
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    // attempt to authenticate the user
    const { username, password } = req.body;
    const user = await User.authenticate(username, password);

    // if successful authentication generate a token for the user
    const token = createToken(user);

    // return token in json response
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});


/** POST /auth/register:   { user } => { token }
 *
 * user must include { username, password, firstName, lastName, email }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

router.post("/register", async function (req, res, next) {
  try {
    // validate the request body against userRegisterSchema
    const validator = jsonschema.validate(req.body, userRegisterSchema);
    if (!validator.valid) {

      // if it fails throw error with details of the error
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    // if validation passes, register new user with the User model
    const newUser = await User.register({ ...req.body, isAdmin: false });

    // generate a token for the new user
    const token = createToken(newUser);

    // return token in a json response with status code of 201 (created)
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
