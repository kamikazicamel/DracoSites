import React, { Component } from "react";
import { Auth, Logger } from "aws-amplify";
import { Form, Button, Alert } from "react-bootstrap";

const logger = new Logger('JSignin');

export default class JSignIn extends Component{
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.checkContact = this.checkContact.bind(this);
        this.changeState = this.changeState.bind(this);
        this.inputs = {};
        this.state = {error: ''};
    }

    changeState(state, data){
        const{onStateChange} = this.props;
        if(onStateChange){
            onStateChange(state, data);
        }
    }

    signIn() {
        const {username, password} = this.inputs;
        logger.info('Sign in with ' + username);
        Auth.signIn(username, password)
            .then(user => this.signInSuccess(user))
            .catch(err => this.signInError(err));
    }

    signInSuccess(user) {
        logger.info('Sign in success ', user);
        this.setState({error: ''});

        if(user.challengeName === 'SMS_MFA' || user.challengeName === 'SOFTWARE_TOKEN_MFA'){
            this.changeState('confirmSignIn', user);
        } else {
            this.checkContact(user);
        }
    }

    signInError(err){
        logger.info('Sign in error ', err);
        this.setState({error: err.message || err});
    }

    checkContact(user){
        Auth.verifiedContact(user)
            .then(data => {
                if(data.verified){
                    this.changeState('signedIn', user);
                }else {
                    user = Object.assign(user, data);
                    this.changeState('verifyContact', user);
                }
            });
    }

    render(){
        const { authState, authData } = this.props;
        //if(!['signIn', 'signOut', 'signedUp'].includes(authState)){return null;}
        console.log(authState);
        console.log(authData);
        console.log(this.props);

        const style = {
            width: '10rem',
            input: { borderRadius: '0'},
            links: {fontSize: '0.9em'},
            button: {width: '100%'},
            aler: {fontSize: '0.8em'}
        }

        const {error} = this.state;

        return(
            <div display="flex" flex="column">
                <Form style={style}>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        rounded="top"
                        border="bottom-0"
                        style={style.input}
                        defaultValue={authData || ''}
                        onChange={event => this.inputs.username = event.target.value}
                        autoFocus
                    />
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        rounded="bottom"
                        onChange={event => this.inputs.password = event.target.value}
                        style={style.input}
                    />
                    <Button
                        mt="3"
                        style={style.button}
                        onClick={this.signIn}
                    >
                        Sign In 
                    </Button> 
                    { error && <Alert warning mt="3" text="left" style={style.alert}>{error}</Alert> }
                </Form>
            </div>
        )
    }
}