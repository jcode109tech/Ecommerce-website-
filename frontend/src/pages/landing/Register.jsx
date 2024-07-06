// components/Register.js
import React, { useState } from 'react';
import axios from 'axios';


const api = "http://localhost:8000"

const Register = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('customer');

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(`${api}/register`, { name, email, password, role });
            localStorage.setItem('authToken', data.token);
            history.push('/');
        } catch (error) {
            console.error('Error registering', error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                <div>
                    <label>Role</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="customer">Customer</option>
                        <option value="seller">Seller</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
