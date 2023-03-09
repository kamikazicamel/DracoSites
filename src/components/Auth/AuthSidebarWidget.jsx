import React from "react";
import { useSelector } from "react-redux";
import AmplifyBridge from "../../store/AmplifyBridge";
import JSignIn from "./JSignIn";
import JSignOut from "./JSignOut";



function SignInWidget() {
    return(
        <>
        <AmplifyBridge />
            <JSignIn />
        </>
    );
}

function UserWidget(user, profile) {
    return(
        <>
            {profile.given_name || user}<br/>
            <JSignOut />
        </>
    )
}

export default function AuthSideBarWidget(){
    const user = useSelector((state) => state.user.username);
    const profile =  {};

    return(
        <div>
            { user? UserWidget(user, profile) : <SignInWidget /> }
        </div>
    )
}
