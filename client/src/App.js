import React, { useState } from 'react';
import './App.css';

function App() {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  return (
    <div className="App">
      <div className='registration'>
        <h1>Sign-up</h1>
        <label>Email</label>
        <input type="text"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
        />
        <label>Password</label>
        <input type="text"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
        />
        <button>Register</button>
      </div>
      <div className='login'>
        <h1>Sign-in</h1>
        <input type="text" placeholder='Email' />
      </div>
      
    </div>
  );
}

export default App;
