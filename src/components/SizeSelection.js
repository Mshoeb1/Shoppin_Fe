import React, { useState } from "react";
import "./SizeSelection.css";
const SizeSelection = ({ updateWatchPreview }) => {
  const [selectedSize, setSelectedSize] = useState("42mm");

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    updateWatchPreview("size", size); // Pass size data to update preview
  };

  return (
    <div className="size-selection">
      <button
        onClick={() => handleSizeChange("42mm")}
        className={selectedSize === "42mm" ? "active" : ""}
      >
        42mm
      </button>
      <button
        onClick={() => handleSizeChange("46mm")}
        className={selectedSize === "46mm" ? "active" : ""}
      >
        46mm
      </button>
    </div>
  );
};

export default SizeSelection;
