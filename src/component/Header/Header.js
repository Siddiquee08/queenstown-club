import React from 'react';
import logo from '../images/logo.png'
import '../Header/Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <h2>Queenstown Club</h2>
            </div>
        </div>
    );
};

export default Header;