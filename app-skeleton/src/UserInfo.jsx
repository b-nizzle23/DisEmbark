import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {getAuth } from 'firebase/auth'; 
import { useState } from 'react';

function UserInfoPage() {
  const [logout, setLogOut] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  function handleLogOut(e) {
    auth.signOut;
    return navigate("/homepage");
  }
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div>
      <h2>User Info Page</h2>
      <span className="material-symbols-outlined">
        close
      </span>
      <div className="menu">
        <div><Link to="/mypins" className="my-pins">My Pins</Link></div>
        <Link to="/settings">Account Settings</Link>
        <button onClick={handleLogOut}>Log Out</button>
      </div>

    </div>
    </>
  );
}

export default UserInfoPage;