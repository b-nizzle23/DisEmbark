import React from 'react';
import { Link } from 'react-router-dom';

function UserInfoPage() {
  return (
    <div>
      <h2>User Info Page</h2>
      <div className="menu">
        <ul>
          <Link to="/mypins" className="my-pins LinkButton">My Pins</Link>
          <li><a href="#request-feature">Request Feature</a></li>
          <li><a href="#my-pins">My Pins</a></li>
        </ul>
      </div>

      </div>
  );
}

export default UserInfoPage;