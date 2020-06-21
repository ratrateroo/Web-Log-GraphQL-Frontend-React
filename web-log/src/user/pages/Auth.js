import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './Auth.css';

const Auth = () => {
    useForm({
        email: {
            value: '',
            isValid: false
        }, password: {
            value: '',
            isValid: false
        }
    });

    return <Card>
        <h2>Login Required</h2>
        <hr />
        <form>
            <Input element="input" id="email" type="email" label="E-Mail" 
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."/>
            <Button></Button>
        </form>
    </Card>
};

export default Auth;