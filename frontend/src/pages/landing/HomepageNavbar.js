import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import '../../styles/Navbar.css'

const HomepageNavbar = () => {

    const guestLinks = (
    <div className='hoverover'>
        <ul>
            <li><a href='home'>Home</a></li>
            <li><a href='/features'>Features</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/moreaboutus'>Contact</a></li>
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
            <Logo />
            <div id="redirectpages">
              {guestLinks}
            </div>
          </div>
        </nav>
      </header>
  )
}

export default HomepageNavbar