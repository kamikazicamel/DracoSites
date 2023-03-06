import { createContext, useState, useContext, Component } from "react";
import { Hub, Logger, Auth } from "aws-amplify";

const UserContext = createContext(undefined);

export function UserProvider({children}){
    const [currentUser, setCurrentUser] = useState(undefined);
    return(
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    );
}

export function useCurrentUser(){
    return useContext(UserContext);
}

export class loadCurrentUser extends Component {
    static contextType = UserContext;
    constructor(props){
        super(props);
        

        this.loadUser = this.loadUser.bind(this);

        //Hub.listen('auth', this, 'navigator');

        Hub.listen('auth', (data) => {
            const { payload } = data;
            this.onAuthEvent(payload);
            console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
        })
    }

    componentDidMount() {
        this.loadUser();
    }

    onHubCapsule(capsule) {
        console.log('on Auth event', capsule);
        this.loadUser();
    }

    onAuthEvent(payload){
        console.log('on Auth event', payload);
        this.loadUser();
    }

    loadUser() {
        const {currentUser, setCurrentUser} = this.context;
        Auth.currentAuthenticatedUser()
            .then(user => setCurrentUser( user ))
            .catch(err => setCurrentUser( undefined ));
    }

}

export default UserContext;