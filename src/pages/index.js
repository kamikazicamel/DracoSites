import React from 'react';
import { PageBody } from './PageElements';
import { Authenticator } from '@aws-amplify/ui-react';



const Home = () => {
    return (
        <PageBody>
            <h1>Welcome to Draco Sites</h1>
            <Authenticator/>
        </PageBody>
    );
};

export default Home;