import React from 'react';

// styles
import '../styles/components/Navigation.css';

//image
import { logo, night, account } from '../constants/logo';


const Navigation = () => (
    <div className='nav'>
        <div className='logo'>
            <a href='#'>
                <img src={logo} className='icon-logo' alt='logo'/>
            </a>
        </div>
        <div className='menu'>
            <a href='#' className='link-in-menu'>
                <span>Stays</span>
            </a>
            <a href='#' className='link-in-menu'>
                <span>Attractions</span>
            </a>
            <a href='#' >
                <span>
                    <img src={night} alt='night' className='icon-night'/>
                </span>
            </a>
            <a href='#'>
                <span>
                    <img src={account} alt='account'/>
                </span>
            </a>
        </div>
    </div>
);

export default Navigation;