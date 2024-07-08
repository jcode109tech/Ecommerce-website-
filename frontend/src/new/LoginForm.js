import { useData } from '../Context';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import '../styles/forms.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { api } = useData();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(`${api}/users?email=${email}&password=${password}`);
    const users = await response.json();

    if (users.length > 0) {
      const user = users[0];
      // Store user data or token as needed
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/products');
    } else {
      alert('Invalid credentials or user does not exist');
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </>
  );
};

export default LoginForm;
