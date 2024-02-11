import React, { useRef } from 'react';
import homepageimage from './homepage-image.jpg'; // Corrected import statement
import PinCreate from './PinCreate';

function CreationPage() {
    const imageRef = useRef(null);
    return (
        <div>
            <h2>CREATE!</h2>
            <p>This is the Creation Page.</p>
            <div className="image-container">
                <img
                    ref={imageRef}
                    src={homepageimage}
                    alt="CreateMap"
                    className="Picture"
                />
                <PinCreate imageRef={imageRef} />
            </div>
        </div>
    );
}

export default CreationPage;