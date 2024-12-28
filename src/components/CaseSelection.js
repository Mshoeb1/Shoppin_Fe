import React, { useState } from "react";
import "./CaseSelection.css"; // Add custom styles here

const CaseSelection = ({ updateWatchPreview }) => {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseOptions = [
    {
      id: 1,
      name: "Aluminum",
      image:
        "https://res.cloudinary.com/dwekbzmuw/image/upload/v1735379840/image-1_z9x65y.jpg",
    },
    {
      id: 2,
      name: "Titanium",
      image:
        "https://res.cloudinary.com/dwekbzmuw/image/upload/v1735379840/image-2_naw0cc.jpg",
    },
  ];

  const handleCaseClick = (caseId) => {
    setSelectedCase(caseId);
    updateWatchPreview("case", caseId); // Pass data to update preview
  };

  return (
    <div className="case-selection">
      {caseOptions.map((item) => (
        <div
          key={item.id}
          className={`case-option ${
            selectedCase === item.id ? "selected" : ""
          }`}
          onClick={() => handleCaseClick(item.id)}
        >
          <img src={item.image} alt={item.name} className="image" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CaseSelection;
