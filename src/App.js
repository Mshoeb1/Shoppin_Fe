import React, { useState } from "react";
import CaseSelection from "./components/CaseSelection";
import SizeSelection from "./components/SizeSelection";
import BandSelection from "./components/BandSelection";
import CollectionSwitch from "./components/CollectionSwitch";
import PriceDisplay from "./components/PriceDisplay";
import "./App.css";

const App = () => {
  const [watchPreview, setWatchPreview] = useState({
    case: "Aluminum",
    size: "42mm",
    band: "Solo Loop",
    price: 399,
  });

  const updateWatchPreview = (type, value) => {
    setWatchPreview((prev) => ({
      ...prev,
      [type]: value,
      price: calculatePrice(type, value), // Example function for price calculation
    }));
  };

  const calculatePrice = (type, value) => {
    // This is just an example; you can add more logic based on selection
    let basePrice = 399;
    if (type === "size" && value === "46mm") basePrice += 50;
    return basePrice;
  };

  return (
    <div className="app">
      <h1 className="main-heading">Watch</h1>
      <CaseSelection updateWatchPreview={updateWatchPreview} />
      <SizeSelection updateWatchPreview={updateWatchPreview} />
      <BandSelection updateWatchPreview={updateWatchPreview} />
      <CollectionSwitch
        switchCollection={(collection) => console.log(collection)}
      />
      <PriceDisplay price={watchPreview.price} />
    </div>
  );
};

export default App;
