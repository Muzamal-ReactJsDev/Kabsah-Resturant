import React, { useState } from "react";
import "./Index.css";
const Index = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };
  setTimeout(() => {
    setShowAlert(false);
  }, 1000);
  return (
    <>
      <footer className="profile-footer">
        <button className="profile-footer-button" onClick={handleClick}>
          Update Profile
        </button>
        {showAlert && (
          <div className="alert">
            <span className="alert-message">Update SuccessFully</span>
          </div>
        )}
      </footer>
    </>
  );
};

export default Index;
