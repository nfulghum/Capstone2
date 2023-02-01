CREATE TABLE users (
    username VARCHAR(25) PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
        CHECK (position('@' IN email) > 1),
     is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    bodyPart TEXT,
    equipment TEXT,
    gifUrl TEXT NOT NULL,
    name TEXT,
    target TEXT,
);

CREATE TABLE bodyParts (
    id SERIAL PRIMARY KEY,
    name TEXT,
);

