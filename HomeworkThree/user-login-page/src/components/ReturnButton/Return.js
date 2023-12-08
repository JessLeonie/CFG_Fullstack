import React from 'react';
import './Return.css';

const Return = () => {
  const handleClick = () => {
    // Logic for button click action
    console.log('Button clicked');
  };

  return (
    <div className="error-container">
      <h2>Error</h2>
      <p>Your username or password was incorrect. Please try again.</p>
      <button className="return-button" onClick={handleClick}>
        Return
      </button>
    </div>
  );
};

export default Return;