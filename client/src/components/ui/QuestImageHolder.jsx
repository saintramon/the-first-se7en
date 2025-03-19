import React from "react";
import "./quest_image_holder.css";

const QuestImageHolder = ({ images }) => {
  // Make sure we always have 4 slots even if fewer images are provided
  const imageArray = Array.isArray(images) ? images : [];
  
  // Fill with null for empty slots if needed
  while (imageArray.length < 4) {
    imageArray.push(null);
  }

  return (
    <div className="quest-image-grid">
      {imageArray.slice(0, 4).map((src, index) => (
        <div className="quest-image-holder" key={index}>
          {src ? <img src={src} alt={`Image ${index + 1}`} /> : <span>No Image</span>}
        </div>
      ))}
    </div>
  );
};

export default QuestImageHolder;
