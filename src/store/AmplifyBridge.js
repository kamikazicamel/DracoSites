import { Auth, Hub } from "aws-amplify";
import { connect } from "react-redux";
import { loadEmail, loadSub, loadUsername, clearUser } from "./userSlice";
import { Component } from "react";

class AmplifyBridge extends Component{
    constructor(props){
        super(props)

        this.onAuthEvent = this.onAuthEvent.bind(this);

        Hub.listen('auth', (data) => {
            const { payload } = data;
            this.onAuthEvent(payload);
            console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
        })

        this.checkUser();
    }

    onAuthEvent(payload) {
        this.checkUser();
    }

    checkUser() {
        //console.log('User Checked');
        Auth.currentAuthenticatedUser()
            .then(user => {
                //console.log(user);
                this.props.loadUsername(user.username);
                this.loadProfile(user);
            })
            .catch(() => {
                this.props.clearUser();
            });
    }

    loadProfile(user) {
        Auth.userAttributes(user)
            .then(data => {
                const profile = this.translateAttributes(data);
                //console.log(profile['email']);
                this.props.loadEmail(profile['email']);
                this.props.loadSub(profile['sub']);
            })
            .catch(err => console.log(err));
    }

    translateAttributes(data){
        const attributes = {};
        data
            .filter(attr => ['email', 'sub'].includes(attr.Name))
            .forEach(attr => attributes[attr.Name] = attr.Value);
        return attributes;
    }

    render(){
        return(
            <></>
        )
    }
}

const mapDispatchToProps = {
    loadEmail,
    loadSub,
    loadUsername,
    clearUser
}

export default connect(null, mapDispatchToProps)(AmplifyBridge)