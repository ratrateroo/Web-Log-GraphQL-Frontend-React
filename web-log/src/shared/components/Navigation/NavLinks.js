import React from 'react';

import './NavLinks.css';

const NavLinks = props => {
    return (  
        
       
        <ul className="nav-links">
            <li className="nav-link"><a href="../index.html" className="nav-link-item active">Link</a></li>
            <li className="nav-link"><a href="../Blog List/Blog List.html" className="nav-link-item">Blog
                    List</a></li>
            <li className="nav-link"><a href="../Blog/Blog.html" className="nav-link-item">Blog</a></li>
            <li className="nav-link"><a href="../Sidebar/Sidebar.html" className="nav-link-item">Sidebar</a></li>
            <li className="nav-link"><a href="../Signup/Signup.html" className="nav-link-item">Sign Up</a></li>
            <li className="nav-link"><a href="../Login/Login.html" className="nav-link-item">Log In</a></li>
            <li className="nav-link"><a href="../Logo/Logo.html" className="nav-link-item">Logo</a></li>
            <li className="nav-link"><a href="../Navigiation/Navigation.html" className="nav-link-item">Navigation</a>
            </li>
            <li className="nav-link"><a href="../Header/Header.html" className="nav-link-item">Header</a></li>
            <li className="nav-link"><a href="../Footer/Footer.html" className="nav-link-item">Footer</a></li>
            <li className="nav-link"><a href="../User Profile/User Profile.html" className="nav-link-item">User
                    Profile</a>
            </li>
        </ul>
    
    
     );

};

export default NavLinks;