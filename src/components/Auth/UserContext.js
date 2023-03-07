import { createContext, useState, Component } from "react";
import { Hub, Auth } from "aws-amplify";

const UserContext = createContext(undefined);

export function UserProvider({children}){
    const [currentUser, setCurrentUser] = useState(undefined);
    return(
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            <LoadCurrentUser>
                {children}
            </LoadCurrentUser>
        </UserContext.Provider>
    );
}

export class LoadCurrentUser extends Component {
    static contextType = UserContext;
    constructor(props){
        super(props);
        
        this.loadUser = this.loadUser.bind(this);

        Hub.listen('auth', (data) => {
            const { payload } = data;
            this.onAuthEvent(payload);
            console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
        })
    }

    componentDidMount() {
        this.loadUser();
    }

    onAuthEvent(payload){
        console.log('on Auth event', payload);
        this.loadUser();
    }

    loadUser() {
        const {setCurrentUser} = this.context;
        Auth.currentAuthenticatedUser()
            .then(user => setCurrentUser( user ))
            .catch(() => setCurrentUser( undefined ));
    }

    render(){
        return(
            <>
                {this.props.children}
            </>
        )
    }
}

export default UserContext;