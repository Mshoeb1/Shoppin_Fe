import React from "react";
import "../styles/App.css";

const PriceDisplay = ({ price }) => {
  return (
    <div className="price-display">
      <p>Total Price: ${price}</p>
    </div>
  );
};

export default PriceDisplay;
