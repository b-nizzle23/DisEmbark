import React from "react";
import { useNavigate } from 'react-router-dom';

export default function MyPins() {
    const navigate = useNavigate();
    return (
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <button class="material-symbols-outlined" onClick={() => navigate('/userinfo')}>arrow_back</button>
        <div>My Pins</div>
        </>
    );
}