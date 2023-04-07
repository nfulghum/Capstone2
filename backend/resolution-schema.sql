CREATE TABLE meals (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  image_type VARCHAR(10),
  ready_in_minutes INT,
  servings INT,
  source_url VARCHAR(255)
);

CREATE TABLE nutrients (
  id SERIAL PRIMARY KEY,
  calories DECIMAL,
  carbohydrates DECIMAL,
  fat DECIMAL,
  protein DECIMAL
);


CREATE TABLE users (
    username VARCHAR(25) PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
        CHECK (position('@' IN email) > 1),
    is_admin BOOLEAN NOT NULL DEFAULT FALSE
);


CREATE TABLE meal_plans (
    username VARCHAR(25)
        REFERENCES users ON DELETE CASCADE,
    meal_id INTEGER 
        REFERENCES meals ON DELETE CASCADE,
    PRIMARY KEY (username, meal_id)
);






