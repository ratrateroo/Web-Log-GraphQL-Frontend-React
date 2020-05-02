import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

   const USERS = [{id: 'u1', name: 'Aurora Barnuts', image: 'https://cdn-img.instyle.com/sites/default/files/styles/640x768/public/1571415335/jennifer%20lawrence%20wedding%20dress%20lead.jpg', blogs: 3}];

   return <UsersList items={USERS}/>
};

export default Users;