import React, { useState } from "react";
import "./BandSelection.css";
const BandSelection = ({ updateWatchPreview }) => {
  const [selectedBand, setSelectedBand] = useState(null);

  const bandOptions = [
    {
      id: 1,
      name: "Solo Loop",
      image:
        "https://res.cloudinary.com/dwekbzmuw/image/upload/v1735379840/images-3_pujgmm.png",
    },
    {
      id: 2,
      name: "Braided Solo Loop",
      image:
        "https://res.cloudinary.com/dwekbzmuw/image/upload/v1735379840/image-4_f8drmn.jpg",
    },
    {
      id: 3,
      name: "Chartreuse Braided Solo Loop",
      image:
        "https://res.cloudinary.com/dwekbzmuw/image/upload/v1735380649/grid-braided-solo-loop-chartreuse-s10_chjsjc.jpg",
    },
    {
      id: 4,
      name: "Natural Titanium Milanese Loop",
      image:
        "https://res.cloudinary.com/dwekbzmuw/image/upload/v1735380634/grid-milanese-loop-natural-titanium-s10_zzog4m.jpg",
    },
    {
      id: 5,
      name: "Tan Alpine Loop",
      image:
        "https://res.cloudinary.com/dwekbzmuw/image/upload/v1735380615/grid-alpine-loop-tan-black-titanium-s10_ba6tz2.jpg",
    },
    {
      id: 6,
      name: "MXU33 Cotton Bands",
      image:
        "https://res.cloudinary.com/dwekbzmuw/image/upload/v1735380591/MXU33_FV401_vfdiiv.png",
    },
    {
      id: 7,
      name: "MAY33 NEW GEN",
      image:
        "https://res.cloudinary.com/dwekbzmuw/image/upload/v1735380569/MYA33ref_FV401_lntv7m.png",
    },
  ];

  const handleBandClick = (bandId) => {
    setSelectedBand(bandId);
    updateWatchPreview("band", bandId); // Pass data to update preview
  };

  return (
    <div className="band-selection">
      {bandOptions.map((item) => (
        <div
          key={item.id}
          className={`band-option ${
            selectedBand === item.id ? "selected" : ""
          }`}
          onClick={() => handleBandClick(item.id)}
        >
          <img src={item.image} alt={item.name} className="image" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BandSelection;
