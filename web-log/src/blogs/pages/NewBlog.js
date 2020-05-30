import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators'
import './NewBlog.css';

const NewBlog = () => {
    return <form className="blog-form">
        <Input type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid title"/>
    </form>
};

export default NewBlog;