import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';


import React from 'react';
import LoginPage from './LoginPage';


function App() {
  return (
    <div className="App">
      // Landing Page with authorization
      <h1>Welcome to Disembark!</h1>


      <LoginPage/>
      <h2>_____________________________</h2>
      // Home Page 
      <HomePage />
      <Link to="/addpin" className="add-pin LinkButton">
        <span>Add Pins</span>
      </Link>
      <h2>_____________________________</h2>
      // User info Page
      <UserInfo />
      <h2>_____________________________</h2>
      // Accomadations Page
      <h2>_____________________________ </h2>


      
    </div>
  );
}


export default App
