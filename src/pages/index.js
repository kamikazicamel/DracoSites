import React from 'react';
import { PageBody } from './PageElements';
import { useSelector } from 'react-redux';


const Home = () => {
    const user = useSelector(state => state.user.value);
    return (
        <PageBody>
            <h1>Welcome to Draco Sites</h1>
            { user? 'Hi ' + user.username : 'Please sign in' }
        </PageBody>
    );
};

export default Home;