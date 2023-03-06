import React, {Component} from "react";
import { Auth, Logger } from "aws-amplify";
import {  NavLink } from "react-bootstrap";

const logger = new Logger('JSignOut');

export default class JSignOut extends Component{
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut(){
        Auth.signOut()
            .then(() => logger.info('Sign out success'))
            .catch(err => logger.info('Sign out error', err));
    }

    render() {
        return (
            <NavLink onClick={this.signOut}>Sign Out</NavLink>
        )
    }

}