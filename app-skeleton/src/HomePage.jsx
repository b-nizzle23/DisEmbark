import React from 'react';
import homepageImage from './homepage-image.jpg'; // Import the image file
import './HomePage.css'
import LoginPage from './LoginPage';

function HomePage() {
  return (
    <div>
      <h2>Welcome to Our Website!</h2>
      <p>This is the homepage of our app.</p>
      <div className='layer'>
        <LoginPage/>
      </div>
    </div>
  );
}

export default HomePage;