import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import './NewBlog.css';

const NewBlog = () => {
    return <form className="blog-form">
        <Input type="text" label="Title" validators={[]} errorText="Please enter a valid title"/>
    </form>
};

export default NewBlog;