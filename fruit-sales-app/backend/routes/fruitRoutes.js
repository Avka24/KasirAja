const express = require("express");
const router = express.Router();
const fruitController = require("../controllers/fruitController");

router.get("/", fruitController.getAllFruits);
router.post("/", fruitController.createFruit);
router.put("/:id", fruitController.updateFruit);
router.delete("/:id", fruitController.deleteFruit);

module.exports = router;
