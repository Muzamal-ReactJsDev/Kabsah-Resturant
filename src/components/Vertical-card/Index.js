import React from "react";
import "./Index.css";

const Index = ({ image, text, icon1, icon2 }) => {
  return (
    <div className="vertical-card">
      <div className="card-content">
        <div className="left-content">
          <img src={image} alt="Card" className="card-image" />
          <p className="card-text">{text}</p>
        </div>
        <div className="right-content">
          <i className={icon1}></i>
          <i className={icon2}></i>
        </div>
      </div>
    </div>
  );
};

export default Index;
