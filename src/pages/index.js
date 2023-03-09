import React from 'react';
import { PageBody } from './PageElements';
import { useSelector } from 'react-redux';


export default function Home() {
    const user = useSelector((state) => state.user.username);
    console.log(user);
    return (
        <PageBody>
            <h1>Welcome to Draco Sites</h1>
            { user? 'Hi ' + user : 'Please sign in' }
        </PageBody>
    );
};
