import React from 'react';

const pins = [
  { id: '1234', category: 'HandicapAccessible', x: 100, y: 100, description: 'Pin 1' },
  { id: '5678', category: 'GlutenFree', x: 200, y: 200, description: 'Pin 2' },
  { id: '91011', category: 'Sensory', x: 300, y: 300, description: 'Pin 3' },
  { id: '121314', category: 'GlutenFree', x: 400, y: 400, description: 'Pin 4' },
  // Add more pins as needed
];

const Pin = ({ cat }) => {
  const filteredPins = pins.filter(pin => pin.category === cat);

  return (
    <>
      {filteredPins.map(pin => (
        <div
          key={pin.id}
          style={{
            position: 'absolute',
            left: pin.x,
            top: pin.y,
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'red',
            cursor: 'pointer',
            zIndex: 100
          }}
          onClick={() => console.log(`Pin ${pin.id} clicked:`, pin.description)}
        />
      ))}
    </>
  );
};

export default Pin;