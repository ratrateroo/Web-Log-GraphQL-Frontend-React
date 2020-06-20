import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from  './user/pages/Users';
import NewBlog from './blogs/pages/NewBlog';
import UserBlogs from './blogs/pages/UserBlogs';
import UpdateBlog from './blogs/pages/UpdateBlog';
import Auth from './user/pages/Auth';

import MainNavigation from './shared/components/Navigation/MainNavigation';
const App = () => {
  return (
  <Router>
    <MainNavigation/>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/blogs" exact>
          <UserBlogs />
        </Route>
        <Route path="/blogs/new" exact>
          <NewBlog />
        </Route>
        <Route path="/blogs/:blogId">
          <UpdateBlog/>
        </Route>
        <Route path="/auth">
          <Auth/>
        </Route>
        <Redirect to="/" />
      </Switch>
  </Router>
  )
}

export default App;
