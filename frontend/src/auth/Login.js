import React, { useContext, useState } from "react";
import  { useNavigate } from 'react-router-dom';

import '../styles/Authform.css'
import { useData } from "../Context";

export const Login = (props) => {
    const [username, setUserName] = useState('');
    const [password, setPass] = useState('');
    const { login, Api } = useData();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);
        try {
            const response = await fetch(`${Api}/api/auth/login`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
            login(data);
            navigate('/homeuser')
        } else {
            console.error('Login failed');
        }
        } catch (err) {
        console.error('Login error:', err);
        }
  };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">username</label>
                <input required value={username} onChange={(e) => setUserName(e.target.value)}type="text" placeholder="username" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input required value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" autoComplete="on" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
