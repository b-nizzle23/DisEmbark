import React from "react";
import { useState } from "react";
import {getAuth, updatePassword, updateEmail} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Settings.css';


export default function AccoutSettings() {
    const currentUser = getAuth().currentUser;
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }


    async function handleChanges(e) {
        try {
            await updateEmail(currentUser, email);
            await updatePassword(currentUser, password);
            return navigate("/userinfo");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <button class="material-symbols-outlined" onClick={() => navigate('/userinfo')}>arrow_back</button>
        <div>Account Settings</div>
        <h4>Email</h4>
        <input type="email" onChange={handleEmail} placeholder={currentUser.email}></input>
        <h4>Password</h4>
        <input type="password" onChange = {handlePassword}></input>
        <h4>Tags</h4>
        <div className='tags'>
            
        </div>
        <button onClick={handleChanges} className="submit">Save</button>
        </>
    );
}