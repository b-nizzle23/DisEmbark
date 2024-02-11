import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'firebaseui/dist/firebaseui.css';
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
import './LoginPage.css'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toDashboard, setToDashboard] = useState(false);
  const navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit() {
    signInWithEmailAndPassword(getAuth(), email, password)
    .then(cred => {
      return navigate("/mappage");
    })
    .catch((err) => {
      alert(err)
    })
  }

  if (toDashboard === true) {
    return <Navigate to="/mappage"/>;
  }


    return (
        <div className='container'>
          <h1 className="text-center my-3 title">Log in</h1>
          <input placeholder='Enter Username' onChange={handleEmail} value={email}></input>
          <input placeholder='Enter Password' onChange={handlePassword} value={password}></input>
          <button onClick={handleSubmit}>Log In</button>
        </div>
    );
}
