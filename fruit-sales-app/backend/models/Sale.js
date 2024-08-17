const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  fruit: { type: mongoose.Schema.Types.ObjectId, ref: "Fruit", required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Sale", saleSchema);
