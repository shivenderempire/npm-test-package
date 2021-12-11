import React from "react";
import "./ImageCard.css";

const ImageCard = (props: any) => {
  return (
    <div className="img-card">
      <img className="img" src={props.imageSrc} />
      <div className="card-body">
        <div className="card-title">{props.title}</div>
        <div className="card-text">{props.text}</div>
      </div>
    </div>
  );
};

export default ImageCard;
