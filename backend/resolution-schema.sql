CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(25),
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
        CHECK (position('@' IN email) > 1),
     is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

-- CREATE TABLE meal_plans (
--     meal_plan_id SERIAL PRIMARY KEY,
--     name TEXT NOT NULL,
--     nutrients INTEGER NOT NULL,
--     username INTEGER NOT NULL REFERENCES users
-- );

-- CREATE TABLE meals (
--     id SERIAL PRIMARY KEY,
--     title TEXT NOT NULL,
--     ready_in_minutes INTEGER NOT NULL,
--     servings INTEGER NOT NULL,
--     source_url TEXT NOT NULL,
--     meal_plan_id INTEGER NOT NULL REFERENCES meal_plans
-- );




