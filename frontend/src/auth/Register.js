// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';


// export const Register = (props) => {
  //     const [email, setEmail] = useState('');
  //     const [password, setPassword] = useState('');
  //     const [firstname, setFirstName] = useState('');
  //     const [lastname, setLastName] = useState('');
  //     const [username, setUserName] = useState('');
  //     const [role, setRole] = useState('User');
  
  //     const {Api } = useData();
  
  //     const navigate = useNavigate();
  
  //     const handleSubmit = async (e) => {
    //         e.preventDefault();
    
    //     // try {
      //         const response = await fetch(`${Api}/api/users?email=${email}&password=${password}`);
      //         const users = await response.json();
      //         console.log(users)
      //         toast.success('Registration successful! Please check your email for OTP.')  
      //     //  }  catch (error) { 
  //     //     toast.error(error.response.data.message || 'Registration failed');
  //     //  } 
  
  //     if (users.email === email || users.password === password) {
    //       alert('User or Password already exists');
    //     } else {
      //       const newUser = { firstname, lastname, username , email, password, role: 'customer' };
      //       const registerResponse = await fetch(`${Api}/api/auth/register`, {
        //         method: 'POST',
        //         headers: {
          //           'Content-Type': 'application/json',
          //         },
          //         body: JSON.stringify(newUser),
          //       });
          
          //       if (registerResponse.ok) {
            //         const user = await registerResponse.json();
            //         localStorage.setItem('user', JSON.stringify(user));
            //         navigate('/products');
            //       } else {
              //         alert('Registration failed');
              //       }
              //     }
              //     };
              
              //     return (
                //         <div className="auth-form-container">
                //             <h2>Register</h2>
                //         <form className="register-form" onSubmit={handleSubmit}>
                //             <label htmlFor="name">Full name</label>  
                //             <input required value={firstname} name1="name" onChange={(e) => setFirstName(e.target.value)} id="name1" placeholder="Full Name" />
                //             <input required value={lastname} name2="name" onChange={(e) => setLastName(e.target.value)} id="name2" placeholder="Last Name"></input>
                //             <label htmlFor="username">username</label>
                //             <input required value={username} onChange={(e) => setUserName(e.target.value)}type="username" placeholder="janeDoe123"></input>
                //             <label htmlFor="email">email</label>
                //             <input required value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                //             <label htmlFor="password">password</label>
                //             <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" autoComplete="on" />
                //             {/* <select name="role" onChange={(e) => setRole(e.target.value)}>
                //                 <option value="Buyer">Buyer</option>
                //                 <option value="Seller">Seller</option>
                //             </select> */}
                //             <label htmlFor="role">Role</label>  
                //             <input required value={role} onChange={(e) => setRole(e.target.value)} type="role" placeholder="Admin / User" id="role" name="role" />
                //             <button type="submit">Log In</button>
                //         </form>
                //         <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
                //     </div>
                //     )
                // }
                


import React, { useState } from 'react';
import axios from 'axios';
import { useData } from "../Context";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import '../styles/Authform.css'

export const Register = (props) => {
        const [formData, setFormData] = useState({
          firstname: '',
          lastname: '',
          username: '',
          email: '',
          password: '',
          role: 'User' // Default role
        });

        const {Api } = useData();
        const navigate = useNavigate();

        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post(`${Api}/api/auth/register`, formData);
            console.log('User registered:', response.data);
            toast.success('User exists')
            navigate('/verify')
        // Redirect or show success message
        } catch (error) {
        console.error('Registration failed:', error.response.data);
        toast.success('User exists : Log in')
        // Handle error, show error message
        }
        };

    return (
      <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" required />
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" required />
            <label htmlFor="username">username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
            <label htmlFor="email">email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <label htmlFor="password">password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" autoComplete="on"required />
            <button type="submit">Register</button>
        </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
      </div>
    );
};
