import React from 'react';
import logo from '../../img/loggo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review </a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;