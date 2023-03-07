import { Auth, Hub } from "aws-amplify";
import { switchUser, updateProfile, deleteProfile } from "./actions";

export default class AmplifyBridge{
    constructor(store){
        this.store = store;

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
        Auth.currentAuthenticatedUser()
            .then(user => {
                this.store.dispatch(switchUser(user));
                this.loadProfile(user);
            })
            .catch(() => {
                this.store.dispatch(switchUser(null));
                this.store.dispatch(deleteProfile());
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
}

