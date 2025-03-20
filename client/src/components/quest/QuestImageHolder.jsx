import React from "react";
import "./quest_image_holder.css";

const QuestImageHolder = ({ images, answer }) => {
  return (
    <div className="quest-image-grid">
      {images.map((filename, index) => {
        const imagePath = `public/assets/img/${answer}/${filename}`;
        return (
          <div className="quest-image-holder" key={index}>
            <img src={imagePath} alt={`Image ${index + 1}`} onError={() => console.error("Image not found:", imagePath)} />
          </div>
        );
      })}
    </div>
  );
};

export default QuestImageHolder;