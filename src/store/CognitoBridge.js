import { Auth, Hub } from "aws-amplify";
import { connect } from "react-redux";
import { switchUser } from "./userSlice";
import { updateProfile, deleteProfile } from "./actions";
import { useDispatch } from "react-redux";
import { Component } from "react";


export default function CognitoBridge(){
    Hub.listen('auth', (data) => {
        const { payload } = data;
        onAuthEvent(payload);
        console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
    })

    CheckUser();
}

function onAuthEvent(payload) {
    CheckUser();
};

function CheckUser() {
    const dispatch = useDispatch();
    console.log('User Checked');
    Auth.currentAuthenticatedUser()
        .then(user => {
            console.log('user');
            dispatch(switchUser(user));
            //this.loadProfile(user);
        })
        .catch(() => {
            dispatch(switchUser(null));
            //this.store.dispatch(deleteProfile());
        });
}

function loadProfile(user) {
    Auth.userAttributes(user)
        .then(data => {
            const profile = this.translateAttributes(data);
            this.store.dispatch(updateProfile(profile));
        })
        .catch(err => this.store.dispatch(deleteProfile(err)));
}

