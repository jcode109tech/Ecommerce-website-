import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './landing/Logo';
import SearchProducts from './user/SearchProducts';
import '../style/Navbar.css';
// import { useData } from '../Context';

const NavbarUser = () => {
    // const { categories, products } = useData();

    const userLinks = (
        <div>
            <ul>
                {/* <SearchProducts /> */}
                <li><NavLink to="/">Categories</NavLink></li>
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
                        {userLinks}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavbarUser;

