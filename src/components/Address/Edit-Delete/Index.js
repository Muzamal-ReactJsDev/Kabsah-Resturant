import React, { useState } from "react";
import "./Index.css";
const Index = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="address-dot-menu">
      <div className="address-dots" onClick={toggleMenu}></div>
      {isMenuVisible && (
        <div className="address-dot-menu">
          <button className="address-edit-button">Edit</button>
          <button className="address-delete-button">Delete</button>
        </div>
      )}
    </div>
  );
};

export default Index;
