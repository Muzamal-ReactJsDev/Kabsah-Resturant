import React, { useState } from "react";
import "./Index.css";
import { deleteAccount } from "./Api"; // Import the fake API function
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    setIsLoading(true);
    navigate("/");
    // Simulate the API request
    deleteAccount()
      .then(() => {
        // Handle the successful delete response
        setIsLoading(false);
        // Add your logic here (e.g., redirect to another page)
      })
      .catch((error) => {
        // Handle the error response
        setIsLoading(false);
        console.error(error);
      });
  };

  return (
    <div className="delete-pop-container">
      <button onClick={togglePopup}>Delete Account</button>
      {isOpen && (
        <div className="delete-pop-overlay">
          <div className="delete-pop-content">
            {isLoading ? (
              <div className="delete-pop-loading">Loading...</div>
            ) : (
              <>
                <p>Are you sure you want to delete your account?</p>
                <div className="delete-pop-buttons">
                  <button className="delete-pop-confirm" onClick={handleDelete}>
                    Delete
                  </button>
                  <button className="delete-pop-cancel" onClick={togglePopup}>
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
