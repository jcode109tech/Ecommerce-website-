import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import '../../styles/Navbar.css'

const HomepageNavbar = () => {

    const guestLinks = (
    <div className='hoverover'>
        <ul>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/features'>Features</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contacts'>Contact</NavLink></li>
            <li><NavLink to="/login">
                <button className="login-button">Log In / Register</button>
            </NavLink></li> 
        </ul> 
    </div>
  );
  return (
    <header id="looknav">
        <nav className="navbar">
          <div id="navlook">
            {/* <Logo /> */}
            <h3>Calm Cove</h3>
            <div id="redirectpages">
              {guestLinks}
            </div>
          </div>
        </nav>
      </header>
  )
}

export default HomepageNavbar