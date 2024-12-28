import React, { useState } from "react";
import "./CollectionSwitch.css";

const CollectionSwitch = ({ switchCollection }) => {
  const collections = ["Series 10", "Hermès", "SE"];
  const [selectedCollection, setSelectedCollection] = useState("Series 10");

  const handleCollectionChange = (e) => {
    setSelectedCollection(e.target.value);
    switchCollection(e.target.value);
  };

  return (
    <div className="collection-switch">
      <select onChange={handleCollectionChange} value={selectedCollection}>
        {collections.map((collection, idx) => (
          <option key={idx} value={collection}>
            {collection}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CollectionSwitch;
