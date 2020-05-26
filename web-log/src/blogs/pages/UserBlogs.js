import React from 'react';
import { useParams } from 'react-router-dom';

import BlogList from '../components/BlogList';

const DUMMY_BLOGS = [
    {id: 'b1',
    title: 'my title',
    description: 'my description',
    imageUrl: 'my-image-url',
    creator: 'Aurora Barnuts'
    },
    {id: 'b2',
    title: 'my new title',
    description: 'my description',
    imageUrl: 'my-image-url',
    creator: 'Aurora Barnuts'
    }
];

const UserBlogs = () => {
    const userId = useParams().userId;
    const loadedBlogs = DUMMY_BLOGS.filter(blog => blog.creator === userId);
    return <BlogList items={loadedBlogs}/>
};

export default UserBlogs;