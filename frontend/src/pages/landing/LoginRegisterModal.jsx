import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginRegisterModal = ({ setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/login' : '/api/register';
    try {
      const response = await axios.post(url, { email, password });
      if (response.data.success) {
        if (isLogin) {
          setIsLoggedIn(true);
          navigate('/user');
        } else {
          setIsLogin(true);
        }
      }
    } catch (error) {
      console.error(`${isLogin ? 'Login' : 'Registration'} failed:`, error);
    }
  };

  return (
    <div className="modal">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default LoginRegisterModal;
