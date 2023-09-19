// Login.js
import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import './login.css'; // Import your CSS file here

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here (e.g., API call or authentication)
    console.log('Logging in with email:', email, 'and password:', password);
  };

  return (
    // <Link to="/">login</Link>
    <div className="container">
      <h2>Login</h2>
      <form>
        <input className='mail'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <h5>Don't have an account?<Link to="/signup">Sign up</Link></h5>
        
      </form>
    </div>
  );
};

export default Login;
