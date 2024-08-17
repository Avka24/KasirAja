const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fruitRoutes = require("./routes/fruitRoutes");
const saleRoutes = require("./routes/saleRoutes");
const { connectDB } = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/fruits", fruitRoutes);
app.use("/api/sales", saleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
