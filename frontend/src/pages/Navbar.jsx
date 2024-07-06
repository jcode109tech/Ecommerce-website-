import React from 'react';
import { NavLink } from 'react-router-dom';

// LANDING PAGE
import Logo from './landing/Logo';
import Home from './landing/Home';
import Features from './landing/Features';
import About from './landing/About';
import MoreAboutUs from './landing/MoreAboutUs';

import ProductList from './user/ProductList';

// MAIN USER INTERFACE
import SearchProducts from './user/SearchProducts';


// STYLE
import '../style/Navbar.css';


const Navbar = ({ isLoggedIn, categories, products, handleSearch }) => {

  const guestLinks = (
    <div>
        <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><a href='/features'>Features</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/moreaboutus'>Contact</a></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </ul> 
    </div>
  );

  const userLinks = (
    <div>
      <ul>
          <SearchProducts categories={categories} products={products} onSearch={handleSearch} />
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/cart">Cart</NavLink></li>
              <li><NavLink to="/billing">Billing</NavLink></li>
              <li><NavLink to="/login">Logout</NavLink></li>
              <li><NavLink to="/settings">Settings</NavLink></li>
      </ul> 
    </div>
);

  return (
    <header>
        <nav className="navbar">
            <div id="navlook">
                <Logo />
                <div id="redirectpages">
                    {isLoggedIn ? userLinks : guestLinks}
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;
