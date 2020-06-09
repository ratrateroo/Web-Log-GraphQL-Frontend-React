import React , { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH } from '../../shared/util/validators'
import './BlogForm.css';



const NewBlog = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id})
    }, []);

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };



    return <form className="blog-form" onSubmit={placeSubmitHandler}>
        <Input
        id="title"
        element="input"
        type="text" 
        label="Title" 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText="Please enter a valid title"
        onInput = {inputHandler}
        />

<Input 
        id="description"
        element="textarea"
        label="Description" 
        validators={[VALIDATOR_MAXLENGTH(5)]} 
        errorText="Please enter a valid description (at least 5 characters)."
        onInput = {inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>Add Blog</Button>
    </form>
};

export default NewBlog;