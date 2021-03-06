import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = (props) => {
   const auth = useContext(AuthContext);
   return (
      <ul className="nav-links">
         <li>
            <NavLink to="/" exact>
               All Users
            </NavLink>
         </li>
         {auth.isLoggedIn && (
            <li>
               <NavLink to="/u1/blogs" exact>
                  My Blogs
               </NavLink>
            </li>
         )}
         <li className="nav-link">
            <a href="../index.html" className="nav-link-item active">
               Link
            </a>
         </li>
         <li className="nav-link">
            <a href="../Blog List/Blog List.html" className="nav-link-item">
               Blog List
            </a>
         </li>
         <li className="nav-link">
            <a href="../Blog/Blog.html" className="nav-link-item">
               Blog
            </a>
         </li>
         <li className="nav-link">
            <a href="../Sidebar/Sidebar.html" className="nav-link-item">
               Sidebar
            </a>
         </li>
         <li className="nav-link">
            <a href="../Signup/Signup.html" className="nav-link-item">
               Sign Up
            </a>
         </li>
         <li className="nav-link">
            <a href="../Login/Login.html" className="nav-link-item">
               Log In
            </a>
         </li>
         <li className="nav-link">
            <a href="../Logo/Logo.html" className="nav-link-item">
               Logo
            </a>
         </li>
         <li className="nav-link">
            <a href="../Navigiation/Navigation.html" className="nav-link-item">
               Navigation
            </a>
         </li>
         <li className="nav-link">
            <a href="../Header/Header.html" className="nav-link-item">
               Header
            </a>
         </li>
         <li className="nav-link">
            <a href="../Footer/Footer.html" className="nav-link-item">
               Footer
            </a>
         </li>
         <li className="nav-link">
            <a
               href="../User Profile/User Profile.html"
               className="nav-link-item"
            >
               User Profile
            </a>
         </li>

         {auth.isLoggedIn && (
            <li>
               <button onClick={auth.logout}>Log Out</button>
            </li>
         )}
      </ul>
   );
};

export default NavLinks;
