import React, { useState, useEffect } from "react";
import axios from "axios";

function FruitList() {
  const [fruits, setFruits] = useState([]);

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

  return (
    <div>
      <h2>Fruit Inventory</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit._id}>
            {fruit.name} - Price: ${fruit.price} - Quantity: {fruit.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
