const db = require("../db/dbConfig");

//GET ALL
const getAllCars = async () => {
    try {
        const allCars = await db.any(
            "SELECT c.*,m.make_name,m.make_image FROM cars c LEFT JOIN makes m ON c.make=m.id"
        );
        return allCars;
    } catch (error) {
        return error;
    }
};
//GET ONE BY :ID
const getCarById = async (id) => {
    try {
        const SingleCar = await db.any(
            "SELECT c.*,m.make_name,m.make_image FROM cars c LEFT JOIN makes m ON c.make=m.id WHERE c.id = $1",
            id
        );
        return SingleCar;
    } catch (error) {
        return error;
    }
};
const getAllCarsByMake = async (id) => {
    try {
        const carsByMake = await db.any(
            "SELECT c.*,m.make_name,m.make_image FROM cars c LEFT JOIN makes m ON c.make=m.id WHERE c.make = $1",
            id
        );
        return carsByMake;
    } catch (error) {
        return error;
    }
};
const getAllMakes = async () => {
    try {
        const allMakes = await db.any(
            "SELECT * FROM makes ORDER BY make_name ASC"
        );
        return allMakes;
    } catch (error) {
        return error;
    }
};
const createCar = async (car, imageLocation) => {
    try {
        const { make, model, year, chassis, horsepower, is_favorite } = car;
        const create = await db.any(
            "INSERT INTO cars (make, model, year, chassis, horsepower,  is_favorite, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [make, model, year, chassis, horsepower, is_favorite, imageLocation]
        );
        return create[0];
    } catch (error) {
        alert(e.response.data.error);
        return;
    }
};
const updateCar = async (id, car, imageLocation) => {
    try {
        const { make, model, year, chassis, horsepower, is_favorite } = car;

        const updateFields = {
            make,
            model,
            year,
            chassis,
            horsepower,
            is_favorite,
            image: imageLocation,
        };
        console.log(updateFields);
        let query = "UPDATE cars SET ";
        let values = [];
        let valueIndex = 1;

        for (const field in updateFields) {
            const value = updateFields[field];

            if (value !== null && value !== undefined && value !== "") {
                query += `${field} = $${valueIndex}, `;
                values.push(value);
                valueIndex++;
            }
        }
        query = query.slice(0, -2);
        query += ` WHERE id = $${valueIndex++} RETURNING *`;
        const updatedRecipe = await db.any(query, [...values, id]);

        return updatedRecipe;
    } catch (e) {
        return e;
    }
};
const deleteCarById = async (id) => {
    try {
        const deletedRecipe = await db.any(
            `DELETE FROM cars WHERE id = $1 RETURNING *`,
            id
        );

        return deletedRecipe;
    } catch (e) {
        return e;
    }
};
module.exports = {
    getAllCars,
    getCarById,
    getAllMakes,
    createCar,
    getAllCarsByMake,
    deleteCarById,
    updateCar,
};
