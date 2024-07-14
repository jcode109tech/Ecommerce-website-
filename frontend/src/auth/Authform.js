import React from 'react'
import { useState } from 'react'
import { Login } from './Login'
import { Register } from './Register'
import HomepageNavbar from '../pages/landing/HomepageNavbar'

const Authform = () => {

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

   return (
    <>
      <HomepageNavbar />
      <div className="Auth">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
      </div>
    </>
   );
}

export default Authform