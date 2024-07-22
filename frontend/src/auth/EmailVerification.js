import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../Context';

import '../styles/EmailVerification.css';

const EmailVerification = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { Api } = useData();
    const navigate = useNavigate()

    const handleVerifyEmail = async () => {
        try {
            const response = await fetch(`${Api}/api/auth/verify-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setError('');
                navigate('/login')
            } else {
                setMessage('');
                setError(data.message);
            }
        } catch (error) {
            setMessage('');
            setError('An error occurred during verification. Please try again.');
        }
    };

    return (
        <div>
            <h2>Email Verification</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleVerifyEmail();
            }}>
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
                    <label>OTP:</label>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Verify Email</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default EmailVerification;
