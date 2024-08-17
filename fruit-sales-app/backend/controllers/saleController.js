const Sale = require("../models/Sale");
const Fruit = require("../models/Fruit");

exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find().populate("fruit");
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSale = async (req, res) => {
  const { fruitId, quantity } = req.body;

  try {
    const fruit = await Fruit.findById(fruitId);
    if (!fruit) {
      return res.status(404).json({ message: "Fruit not found" });
    }

    if (fruit.quantity < quantity) {
      return res.status(400).json({ message: "Insufficient fruit quantity" });
    }

    const totalPrice = fruit.price * quantity;

    const sale = new Sale({
      fruit: fruitId,
      quantity,
      totalPrice,
    });

    const newSale = await sale.save();

    fruit.quantity -= quantity;
    await fruit.save();

    res.status(201).json(newSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
