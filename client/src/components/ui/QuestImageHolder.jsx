import React from "react";
import "./quest_image_holder.css";

const QuestImageHolder = ({ images }) => {
  const baseUrl = "http://localhost:8080/images/"; // Adjust this based on your server setup
  const imageArray = Array.isArray(images) ? images : [];

  while (imageArray.length < 4) {
    imageArray.push(null);
  }

  return (
    <div className="quest-image-grid">
      {imageArray.slice(0, 4).map((src, index) => (
        <div className="quest-image-holder" key={index}>
          {src && <img src={`${baseUrl}${src}`} alt={`Quest ${index + 1}`} />}
        </div>
      ))}
    </div>
  );
};


export default QuestImageHolder;
