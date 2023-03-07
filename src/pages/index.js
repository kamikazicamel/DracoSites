import React, { Component } from 'react';
import store from '../store';
import { PageBody } from './PageElements';


export default class Home extends Component {
    constructor(props){
        super(props);

        this.storeListener = this.storeListener.bind(this);

        this.state = {user: null, profile: null};
    }

    componentDidMount(){
        this.unsubscribeStore = store.subscribe(this.storeListener);
    }

    componentWillUnmount(){
        this.unsubscribeStore();
    }

    storeListener(){
        const state = store.getState();
        this.setState({user: state.user, profile: state.profile});
    }
    render(){
        const {user} = this.state;
        const profile = this.state.profile || {};

        return (
            <PageBody>
                <h1>Welcome to Draco Sites </h1>
                { user? 'Hi ' + (profile.given_name || user.username) : 'Please sign in' }
            </PageBody>
        );
    }
    
};

