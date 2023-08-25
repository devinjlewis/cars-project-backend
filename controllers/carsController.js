const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
    getAllCars,
    getCarById,
    createCar,
    deleteCarById,
    updateCar,
} = require("../queries/cars");
const {
    checkName,
    checkIngredients,
    checkInteger,
    checkInstructions,
    checkBoolean,
    checkFile,
} = require("../validations/validations");
const makesController = require("./makesController");
router.use("/makes", makesController);
router.get("/", async (req, res) => {
    const allCars = await getAllCars();
    res.json(allCars);
});
router.get("/:id", async (req, res) => {
    const carId = req.params.id;
    const carById = await getCarById(carId);
    res.json(carById);
});
const storageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        //cb(null, Date.now() + "---" + file.originalname);
        cb(
            null,
            Date.now() +
                "-" +
                req.body.model +
                req.body.year +
                "." +
                file.originalname.split(".")[1]
        );
    },
});
const upload = multer({ storage: storageEngine });
router.post("/", upload.single("image"), checkFile, async (req, res) => {
    const newCar = await createCar(req.body, req.file.filename);
    res.status(200).send("Car Created");
});
router.put("/:id", upload.single("image"), checkFile, async (req, res) => {
    const id = req.params.id;
    let file = "";
    if (req.file) {
        file = req.file.filename;
    }
    const newCar = await updateCar(id, req.body, file);
    res.status(200).send("Car Created");
});
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedCar = await deleteCarById(id);

    if (deletedCar.length === 0) {
        res.status(404).json({ message: "No data found!", error: true });
    } else {
        res.json(deletedCar[0]);
    }
});
module.exports = router;
