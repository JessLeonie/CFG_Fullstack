import React from 'react';
import './SignOut.css';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      // Logic for button click action
      console.log('Button clicked');
      navigate('/');
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