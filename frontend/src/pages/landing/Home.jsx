import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Home = () => {

    const guestLinks = (
    <div>
        <ul>
            <li><a href='home'>Home</a></li>
            <li><a href='/features'>Features</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/moreaboutus'>Contact</a></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </ul> 
    </div>
  );

  return (
    <div>
      <header>
        <nav className="navbar">
          <div id="navlook">
            <Logo />
            <div id="redirectpages">
              {guestLinks}
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="section">
        <h1>Home</h1>
        <p>Welcome to our landing page!</p>
      </section>
      <section id="features" className="section">
        <h1>Features</h1>
        <p>Discover our amazing features.</p>
      </section>
      <section id="about" className="section">
        <h1>About</h1>
        <p>Learn more about us.</p>
      </section>
      <section id="contact" className="section">
        <h1>Contact</h1>
        <p>Get in touch with us.</p>
      </section>
    </div>
  );

}; 

export default Home;
