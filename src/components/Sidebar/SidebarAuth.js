import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { InputLabel, UserInput, PassInput, LoginButton, AuthForm } from "./SidebarAuthElements";
import { Authenticator } from "@aws-amplify/ui-react";

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out', error);
    }
}

async function getUser(){
    let currentUser =null;

    await Auth.currentAuthenticatedUser()
    .then(user => {
        console.log({ user });
        currentUser = user;
    })
    .catch(err => {
        console.log(err);
        currentUser = null;
    })
    console.log(currentUser);
    return currentUser;
}

async function signin_old(event) {
    try {
        const target = event.target;
        const username = target.username;
        const password = target.password;
        const user = Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

class SidebarAuth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    signIn(event) {
        try {
            const username = this.state.username;
            const password = this.state.password;
            console.log(username);
            console.log(password);
            Auth.signIn(username, password);
        } catch (error) {
            console.log('error signing in', error);
        }
        event.preventDefault();
    }

    signOut() {
        try {
            Auth.signOut();
        } catch (error) {
            console.log('error signing out', error);
        }
    }

    LoginForm(props){
        return (
            <AuthForm onSubmit={this.signIn} className="login-form">
                <InputLabel></InputLabel>
                <InputLabel>Username</InputLabel>
                <UserInput 
                    name="username" 
                    type="text" 
                    value={this.state.username} 
                    onChange={this.handleInputChange} />
                <InputLabel>Password</InputLabel>
                <PassInput 
                    name="password" 
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}/>
                <LoginButton type="submit" value="Log In"/>
            </AuthForm>
        );
    }

    UserForm(props){
        
        return(
            <AuthForm>
                <InputLabel>{Auth.user.username}</InputLabel>
                <LoginButton type="button" onClick={this.signOut} value="Log Out"/>
            </AuthForm>
        );
    }

    render(){
        let retval;
        const CurUser = getUser();
        console.log(CurUser);
        if(Auth.user)
        {
            retval = this.UserForm();
        } else {
            retval = this.LoginForm();
        }
        return (
            retval
        );
    }
}

export default SidebarAuth;