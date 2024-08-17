const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("Fruit", fruitSchema);
