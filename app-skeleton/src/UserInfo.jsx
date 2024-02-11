import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {getAuth } from 'firebase/auth'; 
import { useState } from 'react';
import './UserInfo.css';

function UserInfoPage() {
  const [logout, setLogOut] = useState(false);
  const [exit, setExit] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  function handleLogOut(e) {
    auth.signOut();
    return navigate("/homepage");
  }

  function handleExit() {
    // holder value
    return navigate("/homepage");
  }

  function nullHandle()  {

  }


  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div>
      <button className="material-symbols-outlined" onClick={handleExit}>
        close
      </button>
      <div className='user-pic-name'>
        <span className="material-symbols-outlined">
        account_circle
        </span> 
        <span div="user-email">{auth.currentUser ? auth.currentUser.email : ""}</span>
      </div>
      <div className="menu">
        <div className='mypins'><Link to="/mypins" className="my-pins">My Pins</Link></div>
        <div className='settings'><Link to="/settings">Account Settings</Link></div>
        <div className="requests"><Link to="/requests">Submit a Request</Link></div>
        <div className='logout'><button onClick={handleLogOut}>Log Out</button></div>
      </div>

    </div>
    </>
  );
}

export default UserInfoPage;