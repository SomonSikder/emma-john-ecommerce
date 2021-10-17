import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className='header'>
            <h2>Turst</h2>
            <div className="nav-bar">
                <nav>
                    <div className='nav-link'>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/orders">Order Review</NavLink>
                        <NavLink to="/inventory">Manage Inventory</NavLink>
                    </div>
                    <div className='user-stutas'>
                        {user.email && <small>Hello, {user.displayName}</small>}
                        {user.email? <button onClick={logOut} className='btn-log'> Log out</button>: <NavLink to="/login" className='btn-log'>Log in</NavLink> }
                    </div>   
                </nav>
            </div>
        </div>
    );
};

export default Header;