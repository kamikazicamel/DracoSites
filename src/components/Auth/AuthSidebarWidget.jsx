import React, { Component } from "react";
import store from "../../store";
import JSignIn from "./JSignIn";
import JSignOut from "./JSignOut";

export default class AuthSideBarWidget extends Component {
    constructor(props){
        super(props);

        this.storeListener = this.storeListener.bind(this);

        this.state = { user: null, profile: null};
        this.storeListener();
    }

    componentDidMount(){
        this.unsubscribeStore = store.subscribe(this.storeListener);
    }

    componentWillUnmount(){
        this.unsubscribeStore();
    }

    storeListener(){
        console.log('redux notification');
        const state = store.getState();
        this.setState({user: state.user, profile: state.profile});
    }

    SignInWidget() {
        return(
            <>
                <JSignIn />
            </>
        );
    }

    UserWidget(user, profile) {
        return(
            <>
                {profile.given_name || user.username}<br/>
                <JSignOut />
            </>
        )
    }

    render(){
        const {user} = this.state;
        const profile = this.state.profile || {};

        return(
            <div>
                { user? this.UserWidget(user, profile) : <this.SignInWidget /> }
            </div>
        )
    }
}