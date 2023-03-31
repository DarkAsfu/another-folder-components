import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
           <a className='logo'>LOGO</a>  
           <nav>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/shop">Shop</a>
            <a href="/contact">Contact</a>
           </nav>
        </div>
    );
};

export default Header;