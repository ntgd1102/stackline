import React from 'react';
import logo from '../../assets/stackline.png';

import './Header.css'

export const Header = () => {
    return (
    <div className='header'>
      <img src={logo} alt="Logo" />
    </div>
    )
}

export default Header;
