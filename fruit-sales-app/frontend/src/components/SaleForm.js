import React, { useState, useEffect } from "react";
import axios from "axios";

function SaleForm() {
  const [fruits, setFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    fetchFruits();
  }, []);

  const fetchFruits = async () => {
    try {
      const response = await axios.get("/api/fruits");
      setFruits(response.data);
    } catch (error) {
      console.error("Error fetching fruits:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/sales", {
        fruitId: selectedFruit,
        quantity: Number(quantity),
      });
      setSelectedFruit("");
      setQuantity("");
      // Refresh sale list and fruit list
    } catch (error) {
      console.error("Error creating sale:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={selectedFruit}
        onChange={(e) => setSelectedFruit(e.target.value)}
        required
      >
        <option value="">Select a fruit</option>
        {fruits.map((fruit) => (
          <option key={fruit._id} value={fruit._id}>
            {fruit.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        required
      />
      <button type="submit">Record Sale</button>
    </form>
  );
}

export default SaleForm;
