import React from 'react';

import './MainHeader.css';

const MainHeader = props => {
    return <header class="header">
    <nav class="main-navigation">
        <ul class="nav-links">
            <li class="nav-link"><a href="../index.html" class="nav-link-item active">Link</a></li>
            <li class="nav-link"><a href="../Blog List/Blog List.html" class="nav-link-item">Blog
                    List</a></li>
            <li class="nav-link"><a href="../Blog/Blog.html" class="nav-link-item">Blog</a></li>
            <li class="nav-link"><a href="../Sidebar/Sidebar.html" class="nav-link-item">Sidebar</a></li>
            <li class="nav-link"><a href="../Signup/Signup.html" class="nav-link-item">Sign Up</a></li>
            <li class="nav-link"><a href="../Login/Login.html" class="nav-link-item">Log In</a></li>
            <li class="nav-link"><a href="../Logo/Logo.html" class="nav-link-item">Logo</a></li>
            <li class="nav-link"><a href="../Navigiation/Navigation.html" class="nav-link-item">Navigation</a>
            </li>
            <li class="nav-link"><a href="../Header/Header.html" class="nav-link-item">Header</a></li>
            <li class="nav-link"><a href="../Footer/Footer.html" class="nav-link-item">Footer</a></li>
            <li class="nav-link"><a href="../User Profile/User Profile.html" class="nav-link-item">User
                    Profile</a>
            </li>
        </ul>
    </nav>
</header>
};

export default MainHeader;