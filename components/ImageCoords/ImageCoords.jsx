import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database'; // Import Firebase database module

const ImageCoords = () => {
  const [clickCoordinates, setClickCoordinates] = useState({ x: null, y: null });

  const handleClick = (event) => {
    // Get the coordinates of the click event relative to the image
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Update state with the click coordinates
    setClickCoordinates({ x, y });

    // Send coords to Firebase
    //firebase.database().ref('clickCoordinates').push({ x, y });

  };

  return (
    <div>
      <img
        src="path/to/your/image.jpg"    //////reference the proper image here
        alt="Your Image"
        onClick={handleClick}
        style={{ maxWidth: '100%', height: 'auto' }} // Style for responsive image
      />
      {/* Display coordinates */}
      <p>Clicked at: {clickCoordinates.x !== null && clickCoordinates.y !== null ? `(${clickCoordinates.x}, ${clickCoordinates.y})` : 'N/A'}</p>
    </div>
  );
};

export default ImageCoords;
