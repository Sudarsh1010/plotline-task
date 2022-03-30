import React from 'react';

import { images } from '../../constants/index';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav>
      <img // Logo
        src={images.logo}
        alt="logo"
      />

      <h2> {/* Head Text */}
        Data
      </h2>
    </nav>
  )
}

export default NavBar