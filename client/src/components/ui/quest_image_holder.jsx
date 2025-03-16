import React from "react";
import "./quest_image_holder.css";

const QuestImageHolder = ({ images }) => {
  return (
    <div className="quest-image-grid">
      {images.map((src, index) => (
        <div className="quest-image-holder" key={index}>
          <img src={src} alt={`Quest ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default QuestImageHolder;
