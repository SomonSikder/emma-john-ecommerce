import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './header.css';
const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="Logo" />
            <div className="nav-bar">
                <nav>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/orders">Order Review</NavLink>
                    <NavLink to="/inventory">Manage Inventory</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;