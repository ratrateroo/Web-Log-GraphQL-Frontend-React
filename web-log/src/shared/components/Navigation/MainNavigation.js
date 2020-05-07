import React from 'react';

import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = props => {
    return (

        <MainHeader>
        
        <nav className="main-navigation">
      <NavLinks />
    </nav>
    <h1><Link to="/">Your Blogs</Link></h1>
    </MainHeader>   );

};

export default MainNavigation;