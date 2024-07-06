// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const api = "http://localhost:8000"


const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(`${api}/login`, { email, password });
            localStorage.setItem('authToken', data.token);
            history.push('/');
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
