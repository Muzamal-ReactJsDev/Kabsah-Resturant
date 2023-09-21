import React from 'react';
import './SaveButton.css'; // Import the CSS file for styling

const FixedButton = (props) => {
  return (
    <div className="fixed-button">
      <button className='fixed-button-button'>{props.savebutton}</button>
    </div>
  );
};

export default FixedButton;
