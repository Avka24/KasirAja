const Fruit = require("../models/Fruit");

exports.getAllFruits = async (req, res) => {
  try {
    const fruits = await Fruit.find();
    res.json(fruits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFruit = async (req, res) => {
  const fruit = new Fruit({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  });

  try {
    const newFruit = await fruit.save();
    res.status(201).json(newFruit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateFruit = async (req, res) => {
  try {
    const updatedFruit = await Fruit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedFruit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFruit = async (req, res) => {
  try {
    await Fruit.findByIdAndDelete(req.params.id);
    res.json({ message: "Fruit deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
