DROP DATABASE IF EXISTS cars_db_05jk;
CREATE DATABASE cars_db_05jk;

\c cars_db_05jk;


CREATE TABLE makes(
    id SERIAL PRIMARY KEY,
    make_name varchar(50) NOT NULL,
    make_image text NOT NULL
);

CREATE TABLE cars(
    id SERIAL PRIMARY KEY,
    make INTEGER REFERENCES makes (id)
 ON DELETE CASCADE,
    model text NOT NULL,
    year integer NOT NULL,
    chassis varchar(20) NOT NULL,
    horsepower integer NOT NULL,
    image text,
    is_favorite boolean NOT NULL
);