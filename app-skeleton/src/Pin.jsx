// Pin.jsx
//Joel Henry
//To call this element simply insert: <Pin imageRef={imageRef} />

import { getDocs, collection } from 'firebase/firestore';
import { db } from "./firebase"
import React, { useEffect, useRef, useState } from 'react';
import "./Pin.css";


export default function Pin({ imageRef }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [pins, setPins] = useState([
    { id: '1234', category: 'HandicapAccessible', coordinates: [50, 195], descr: 'No stairs' },
    { id: '5678', category: 'GlutenFree', coordinates: [200, 30], descr: 'Only Bread' },
    { id: '7123', category: 'GlutenFree', coordinates: [30, 100], descr: 'No Bread' },
    { id: '4527', category: 'Sensory', coordinates: [100, 100], descr: 'LOUD!' },
    { id: '9163', category: 'Sensory', coordinates: [70, 50], descr: 'quiet...' },
  ])
  const canvasRef = useRef(null);

  useEffect(() => {
    getDocs(collection(db, "pin")).then((doc) => {
      const pins = doc.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      pins.forEach(pin => {
        if (pin.category === 'HandicapAccessible') {
          setPins((currentPins) => [...currentPins, pin])
        }
      })
    }
    )
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    function drawPins() {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const image = imageRef.current;
      context.clearRect(0, 0, canvas.width, canvas.height);

      pins.forEach(pin => {
        const [x, y] = pin.coordinates;
        let pinColor;
        switch (pin.category) {
          case 'HandicapAccessible':
            pinColor = 'blue';
            break;
          case 'GlutenFree':
            pinColor = 'yellow';
            break;
          case 'Sensory':
            pinColor = 'red';
            break;
          default:
            pinColor = 'brown';
            break;
        }
        const adjustedX = (x / image.naturalWidth) * image.width;
        const adjustedY = (y / image.naturalHeight) * image.height;
        const pinSize = 20; // Specify the size of the pin icon

        // Draw circle for top part of pin
        context.beginPath();
        context.arc(adjustedX, adjustedY - pinSize / 4, pinSize / 4, 0, Math.PI * 2);
        context.fillStyle = pinColor;
        context.fill();

        // Draw triangle for bottom part of pin
        context.beginPath();
        context.moveTo(adjustedX - pinSize / 4, adjustedY - 10 + pinSize / 8); // bottom left corner
        context.lineTo(adjustedX + pinSize / 4, adjustedY - 10 + pinSize / 8); // bottom right corner
        context.lineTo(adjustedX, adjustedY + pinSize / 2); // top middle
        context.closePath();
        context.fillStyle = pinColor;
        context.fill();
      });
    };


    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const handleCanvasResize = () => {
      const { offsetTop, offsetLeft } = imageRef.current;
      canvas.style.top = offsetTop + 'px';
      canvas.style.left = offsetLeft + 'px';
      drawPins();
    };

    if (imageRef && imageRef.current) {
      imageRef.current.addEventListener('load', handleImageLoad);
      window.addEventListener('resize', handleCanvasResize);
      if (imageLoaded) {
        drawPins();
      }
    }

    return () => {
      // imageRef.current.removeEventListener('load', handleImageLoad);
      // window.removeEventListener('resize', handleCanvasResize);
      if (imageRef?.current) {
        imageRef.current.removeEventListener('load', handleImageLoad)
      }
      window.removeEventListener('resize', handleCanvasResize)
    };
  }, [pins]);

  const handleCanvasClick = event => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;

    pins.forEach(pin => {
      const [pinX, pinY] = pin.coordinates;
      const adjustedPinX = (pinX / imageRef.current.naturalWidth) * imageRef.current.width;
      const adjustedPinY = (pinY / imageRef.current.naturalHeight) * imageRef.current.height;
      const distance = Math.sqrt((x - adjustedPinX) ** 2 + (y - adjustedPinY) ** 2);
      if (distance <= 20) { // Check if click is within pin's radius
        alert(`Clicked on pin with description: ${pin.descr}`);
      }
    });
  };



  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <canvas
        ref={canvasRef}
        width={imageRef?.current?.width || 0}
        height={imageRef?.current?.height || 0}
        style={{
          position: 'absolute',
          top: imageRef?.current?.offsetTop || 0,
          left: imageRef?.current?.offsetLeft || 0,
          pointerEvents: 'auto', // Allow clicks on canvas
          visibility: imageLoaded ? 'visible' : 'hidden',
        }}
        onClick={handleCanvasClick}
      />
    </>
  );
};

