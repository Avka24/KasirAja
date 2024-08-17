import React from "react";
import FruitForm from "./components/FruitForm";
import FruitList from "./components/FruitList";
import SaleForm from "./components/SaleForm";
import SaleList from "./components/SaleList";

function App() {
  return (
    <div className="App">
      <h1>Fruit Sales App</h1>
      <FruitForm />
      <FruitList />
      <SaleForm />
      <SaleList />
    </div>
  );
}

export default App;
