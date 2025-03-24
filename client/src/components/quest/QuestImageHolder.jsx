import React from "react";
import "../styles/quest_image_holder.css";

const QuestImageHolder = ({ images, answer }) => {
  return (
    <div className="quest-image-grid">
      {images.map((filename, index) => {
        const imagePath = `/assets/img/${answer}/${filename}`;

        return (
          <div className="quest-image-holder" key={index}>
            <img 
              src={imagePath} 
              alt={`Image ${index + 1}`} 
              onContextMenu={(e) => e.preventDefault()}  // Disable right-click
              draggable={false}  // Prevent drag and drop
              onError={() => console.error("Image not found:", imagePath)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default QuestImageHolder;