import React from 'react';
import { PageBody } from './PageElements';
import { Authenticator } from '@aws-amplify/ui-react';
import {JSignIn, JConfirmSignIn } from '../components/Auth';


const Home = () => {
    return (
        <PageBody>
            <h1>Welcome to Draco Sites</h1>
        </PageBody>
    );
};

export default Home;