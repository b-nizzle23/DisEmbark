import React, { useState } from 'react';
import './fr.css';

//Joel Henry
//Creates a generic free response textbox to retrieve input from the user
//for passwords set hideCharacters true
//Prompt will create a text prompt on the left of the textbox
//placeholder is just the same as the html attribute
//Returns whatever the user typed in

const Fr = ({ hideCharacters = false, prompt = '', placeholder = '' }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div>
        <label>{prompt}</label>
        <input
          type={hideCharacters ? 'password' : 'text'}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    );
  };

export default Fr;