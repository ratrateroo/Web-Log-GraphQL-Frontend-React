import react from 'react';

import BlogList from '../components/BlogList';

const DUMMY_BLOGS = [
    {id: 'b1',
    title: 'my title',
    description: 'my description',
    imageUrl: 'my-image-url',
    creator: 'Aurora Barnuts'
    }
];

const UserBlogs = () => {
    return <BlogList items={DUMMY_BLOGS}/>
};

export default UserBlogs