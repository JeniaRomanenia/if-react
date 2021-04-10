import React from 'react';

// styles
import '../styles/components/Icon.css';

//image
import { google, appstore } from '../constants/icon';

const Icon = () => (
    <div className='apps'>
        <a href='#' className='android'>
            <img src={google} alt='appStore'/>
        </a>
        <a href='#'>
            <img src={appstore} alt='appStore'/>
        </a>
    </div>
);

export default Icon;