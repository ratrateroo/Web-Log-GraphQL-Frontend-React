import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewBlog from './blogs/pages/NewBlog';
import UserBlogs from './blogs/pages/UserBlogs';
import UpdateBlog from './blogs/pages/UpdateBlog';
import Auth from './user/pages/Auth';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/blogs" exact>
          <UserBlogs />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </React.Fragment>
    );
  } else {
    routes = (
      //not logged in routes
      //root route
      //blogs route
      //auth route
      <React.Fragment>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/blogs" exact>
          <UserBlogs />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/blogs/new" exact>
            <NewBlog />
          </Route>
          <Route path="/blogs/:blogId">
            <UpdateBlog />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
