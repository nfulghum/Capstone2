const bcrypt = require("bcrypt");

const db = require("../db.js");
const { BCRYPT_WORK_FACTOR } = require("../config");

// Sets up and tears down a test env for the "users" table in the db

async function commonBeforeAll() {
  //Deletes all users from the "users" table and inserts two new users with hashed passwords

  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM users");


  await db.query(`
        INSERT INTO users(username,
                          password,
                          first_name,
                          last_name,
                          email)
        VALUES ('u1', $1, 'U1F', 'U1L', 'u1@email.com'),
               ('u2', $2, 'U2F', 'U2L', 'u2@email.com')
        RETURNING username`,
    [
      await bcrypt.hash("password1", BCRYPT_WORK_FACTOR),
      await bcrypt.hash("password2", BCRYPT_WORK_FACTOR),
    ]);
}

async function commonBeforeEach() {
  // starts a new transaction before each test
  await db.query("BEGIN");
}

async function commonAfterEach() {
  // rolls back the transaction after each test
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  // end the db connection after all tests are complete
  await db.end();
}


module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
};