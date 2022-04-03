import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <Link to="/home"> home</Link>
            <Link to="/reviews"> Reviews</Link>

        </nav>
    );
};

export default Header;