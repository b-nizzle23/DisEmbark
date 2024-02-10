import { useState } from 'react';
import 'firebaseui/dist/firebaseui.css';
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 
import './LoginPage.css'

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    function handleEmail(e) {
      setEmail(e.target.value)
    }
  
    function handlePassword(e) {
      setPassword(e.target.value)
    }
  
   function handleSubmit() {
      createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail('');
        setPassword('');
    })
      .catch((err) => {
        alert(err.message)
      })
    }

  
      return (
          <>
              <h1 className="text-center my-3 title">Sign Up Page</h1>
              <input placeholder='Set Username' onChange={handleEmail} value={email}></input>
              <input placeholder='Set Password' onChange={handlePassword} value={password}></input>
              <button onClick={handleSubmit}>Sign Up</button>
          </>
      );
}