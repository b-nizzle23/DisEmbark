import React, { useEffect, useRef, useState } from 'react';

function PinCreate({ imageRef }) {
    const [coordinates, setCoordinates] = useState([]);

    const handleClick = (event) => {
        const imageRect = imageRef.current.getBoundingClientRect();
        const x = event.clientX - imageRect.left;
        const y = event.clientY - imageRect.top;
        setCoordinates([x, y]);
        alert(`X: ${x}, Y: ${y}`);
    };

    return (
        <div>
            <p>Click on the image to create a pin.</p>
            <div style={{ position: 'relative' }}>
                <div
                    style={{
                        position: 'absolute',
                        left: coordinates[0],
                        top: coordinates[1],
                        width: 10,
                        height: 10,
                        backgroundColor: 'red',
                        borderRadius: '50%',
                    }}
                ></div>
                <img
                    src={imageRef.current.src}
                    alt="CreateMap"
                    className="Picture"
                    onClick={handleClick}
                    style={{ maxWidth: '100%' }}
                />
            </div>
        </div>
    );
}

export default PinCreate;
