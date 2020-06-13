import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
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

    
    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false);
    
    const identifiedBlog = DUMMY_BLOGS.find(blog => blog.id === blogId);
    
    useEffect(() => {
setFormData({
        title: {
        value: identifiedBlog.title,
        isValid: true
    },
    description: {
        value: identifiedBlog.description,
        isValid: true
    }}, true);
    }, [setFormData, identifiedBlog]);

    

    const blogUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

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
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
            />

<Input 
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description."
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
            />
        <Button type="submit" disabled={!formState.isValid}>Update Blog</Button>
    </form>
};

export default UpdateBlog;