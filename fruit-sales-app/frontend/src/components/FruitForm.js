import React, { useState } from "react";
import axios from "axios";

function FruitForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/fruits", {
        name,
        price: Number(price),
        quantity: Number(quantity),
      });
      setName("");
      setPrice("");
      setQuantity("");
      // Refresh fruit list
    } catch (error) {
      console.error("Error creating fruit:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Fruit Name"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        required
      />
      <button type="submit">Add Fruit</button>
    </form>
  );
}

export default FruitForm;
