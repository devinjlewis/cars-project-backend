const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const carsController = require("./controllers/carsController");
// const categoriesController = require("./controllers/categoriesController");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/cars", carsController);
//app.use("/categories", categoriesController);

app.get("/", (req, res) => {
    res.send("Welcome to my cars project");
});
app.use("/images", express.static("images"));
// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;
