// src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import './HomePage.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('https://contactlist-1.onrender.com/api/signup', {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
