import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/validators';
import './BlogForm.css';


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

const UpdateBlog = () => {
    const blogId = useParams().blogId;

    const identifiedBlog = DUMMY_BLOGS.find(blog => blog.id === blogId);

    if(!identifiedBlog) {
        return (
            <div>
                <h2>Could not find blog!</h2>
            </div>
        );
    }
    return <form>
        <Input 
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={() => {}}
            value={identifiedBlog.title}
            valid={true}
            />

<Input 
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description."
            onInput={() => {}}
            value={identifiedBlog.description}
            valid={true}
            />
        <Button type="submit" disabled={true}>Update Blog</Button>
    </form>
};

export default UpdateBlog;