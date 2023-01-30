import React from 'react';
import logo from './../../Assets/flash.png';
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} alt="logo" className="flash-logo" />
                <p className="flash-logo-text">Typing Speed Test</p>
            </div>
            <div className="nav-right">
                <a href="https://github.com/yash14agr" className='nav-link' target='_blank' rel='noreferrer'>Github</a>
            </div>
        </div>
    )
}

export default Nav