import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Requests() {
    const navigate = useNavigate();
    function handleSubmit() {
        return navigate("/userinfo");
    }
    return (
        <>
        <div>Submit a Request!</div>
        <input placehold="Name"></input>
        <input placeholder="Location"></input>
        <input placeholder="Tags"></input>
        <input placeholder="Description"></input>
        <button onClick={handleSubmit}>Submit</button>
        </>
    );
}