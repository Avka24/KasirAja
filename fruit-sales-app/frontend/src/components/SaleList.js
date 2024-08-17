import React, { useState, useEffect } from "react";
import axios from "axios";

function SaleList() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const response = await axios.get("/api/sales");
      setSales(response.data);
    } catch (error) {
      console.error("Error fetching sales:", error);
    }
  };

  return (
    <div>
      <h2>Sales History</h2>
      <ul>
        {sales.map((sale) => (
          <li key={sale._id}>
            {sale.fruit.name} - Quantity: {sale.quantity} - Total: $
            {sale.totalPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SaleList;
