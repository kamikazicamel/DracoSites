import { Auth, Hub } from "aws-amplify";
import { connect } from "react-redux";
import { switchUser } from "./userSlice";
import { updateProfile, deleteProfile } from "./actions";
import { Component } from "react";

class AmplifyBridge extends Component{
    constructor(props){
        super(props)
        //this.store = store;

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
        console.log('User Checked');
        Auth.currentAuthenticatedUser()
            .then(user => {
                console.log('user');
                switchUser({user});
                //this.loadProfile(user);
            })
            .catch(() => {
                switchUser(null);
                //this.store.dispatch(deleteProfile());
            });
    }

    loadProfile(user) {
        Auth.userAttributes(user)
            .then(data => {
                const profile = this.translateAttributes(data);
                this.store.dispatch(updateProfile(profile));
            })
            .catch(err => this.store.dispatch(deleteProfile(err)));
    }

    render(){
        return(
            <></>
        )
    }
}

export default connect(null, {switchUser})(AmplifyBridge)