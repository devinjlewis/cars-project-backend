DROP DATABASE IF EXISTS cars_db;
CREATE DATABASE cars_db;

\c cars_db;


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
    horsepower integer,
    image text,
    is_favorite boolean NOT NULL
);