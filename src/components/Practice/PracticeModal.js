import React from "react";
import "./PracticeModal.css";
import "./Practice.css";

function Modal({ Name, Image, Price, handleClose }) {
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={handleClose}>X</button>
        </div>
        <div className="title">
          <h1>{Name}</h1>
        </div>
        <div className="body">
          <img className="cart-image" src={Image} alt="" />
        </div>
        <div>
          <h1>{Price}</h1>
        </div>
        <div className="footer">
          <button onClick={handleClose} id="cancelBtn">
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
