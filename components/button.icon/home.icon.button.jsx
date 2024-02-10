import React from 'react';
import ButtonIcon from './ButtonIcon';

const MyComponent = () => {
  const handleButtonClick = () => {
    // Your button click logic here
    console.log('Button clicked');
  };

  return (
    <div>
      <ButtonIcon onClick={handleButtonClick} iconName="home" />
      {/* Add more ButtonIcon components with different icon names as needed */}
    </div>
  );
};

export default MyComponent;