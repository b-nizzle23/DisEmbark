import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage';
import UserInfo from './UserInfo';

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
      <h2>_____________________________</h2>
      // User info Page
      <UserInfo />
      <h2>_____________________________</h2>
      // Accomadations Page
      <Acommadations />
      <h2>_____________________________ </h2>
      <MyComponent />


      
    </div>
  );
}


export default App
