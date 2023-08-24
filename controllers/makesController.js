const express = require("express");
const router = express.Router();

const { getAllMakes, getAllCarsByMake } = require("../queries/cars");

router.get("/", async (req, res) => {
    const allMakes = await getAllMakes();
    res.json(allMakes);
});

router.get("/:id", async (req, res) => {
    const makeId = req.params.id;
    const carsByMake = await getAllCarsByMake(makeId);
    res.json(carsByMake);
});

module.exports = router;
