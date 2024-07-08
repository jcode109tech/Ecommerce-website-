import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import '../style/RegisterForm.css';
import { useData } from '../Context';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
   const { api } = useData();

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch(`${api}/users?email=${email}`);
    const users = await response.json();

    if (users.length > 0) {
      alert('User already exists');
    } else {
      const newUser = { name, email, password, role: 'customer' };
      const registerResponse = await fetch(`${api}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (registerResponse.ok) {
        const user = await registerResponse.json();
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/dashboard');
      } else {
        alert('Registration failed');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default RegisterForm;





// // src/components/RegisterForm.js
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// // import '../styles/forms.css';

// const RegisterForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     const response = await fetch(`http://localhost:8000/users?email=${email}`);
//     const users = await response.json();

//     if (users.length > 0) {
//       alert('User already exists');
//     } else {
//       const newUser = { name, email, password, role: 'customer' };
//       const registerResponse = await fetch('http://localhost:5000/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newUser),
//       });

//       if (registerResponse.ok) {
//         const user = await registerResponse.json();
//         localStorage.setItem('user', JSON.stringify(user));
//         navigate('/dashboard');
//       } else {
//         alert('Registration failed');
//       }
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       <p>Already have an account? <Link to="/login">Login here</Link></p>
//     </>
//   );
// };

// export default RegisterForm;
