const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

/** return signed JWT from user data. */

function createToken(user) {
  // If user != isAdmin or if it's undefined the assertion will throw an error message to the console.
  console.assert(user.isAdmin !== undefined,
    "createToken passed user without isAdmin property");

  // assign username and isAdmin (if not specified default to false)
  let payload = {
    username: user.username,
    isAdmin: user.isAdmin || false,
  };

  // Sign the playload with the secret key to create a JWT token
  return jwt.sign(payload, SECRET_KEY);
}

module.exports = { createToken };
