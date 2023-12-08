import React from 'react';
import './SignOut.css';

const SignOut = () => {
    const handleClick = () => {
      // Logic for button click action
      console.log('Button clicked');
    };
  
    return (
      <div className="button-container">
        <h2>Welcome!</h2>
        <button className="signout-button" onClick={handleClick}>
          Sign Out
        </button>
      </div>
    );
  };
  
  export default SignOut;