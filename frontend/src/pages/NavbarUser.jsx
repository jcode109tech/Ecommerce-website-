import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './landing/Logo';
import SearchProducts from './user/SearchProducts';
import '../styles/Navbar.css';
import { useData } from '../Context';

const NavbarUser = () => {

    const { logout } = useData();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const userLinks = (
        <div>
            <ul>
                <SearchProducts />
                <li><NavLink to="/categories">Categories</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
                <li><NavLink to="/billing">Billing</NavLink></li>
                <li><NavLink to="/admin">Admin</NavLink></li>
                <li><button className="login-button" onClick={handleLogout}>Log Out</button></li>
            </ul>
        </div>
    );

    return (
        <header className='head'>
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
