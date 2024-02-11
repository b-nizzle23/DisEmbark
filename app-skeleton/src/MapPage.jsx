import React, { useRef } from 'react';
import homepageimage from './homepage-image.jpg'; // Corrected import statement
import Pin from './Pin';
import './MapPage.css';
import NavBar from './Nav';

function MapPage() {
    const imageRef = useRef(null);
    return (
        <div>
            <h2>Welcome to Our Website!</h2>
            <p>This is the homepage of our app.</p>
            <div className="image-container">
                <img
                    ref={imageRef}
                    src={homepageimage} // Corrected variable name
                    alt="MapPage"
                    className="Picture"
                />
                <Pin imageRef={imageRef} />

                <NavBar/>
            </div>
        </div>
    );
}

export default MapPage;