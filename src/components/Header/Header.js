import React from 'react';
import logo from '../../images/logo.png';
import './header.css';
const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="Logo" />
            <div className="nav-bar">
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;