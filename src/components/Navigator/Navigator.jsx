//https://github.com/richardzcode/Journal-AWS-Amplify-Tutorial/blob/master/step-02/journal/src/components/Navigator.jsx
//https://richardzcode.github.io/Journal-AWS-Amplify-Tutorial/step-03/
import React, {Component} from 'react';
import {
    Children,
    SidebarContainer,
    SidebarWrapper,
    SidebarToggler,
    SidebarToggleWrapper,
    ItemWrapper,
    ItemHeadingContainer,
    ItemHeadingWrapper,
    ItemHeadingName,
    ItemContainer,
} from "./NavigatorElements";
import { Auth, Hub, Logger } from 'aws-amplify';
import SidebarItems from './SidebarItems';

const logger = new Logger('Navigator');

function signOut() {
    Auth.signOut().then(data => console.log(data)).catch(err => console.log(err))
}

const MOBILE_VIEW = window.innerWidth < 468;

export default class Navigator extends Component {
    constructor(props){
        super(props);

        this.loadUser = this.loadUser.bind(this);
        this.handleSidebarDisplay = this.handleSidebarDisplay.bind(this);

        //Hub.listen('auth', this, 'navigator');

        Hub.listen('auth', (data) => {
            const { payload } = data;
            this.onAuthEvent(payload);
            console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
        })

        this.state = {user:null, displaySidebar:!MOBILE_VIEW}
    }

    componentDidMount() {
        this.loadUser();
    }

    onHubCapsule(capsule) {
        logger.info('on Auth event', capsule);
        this.loadUser();
    }

    onAuthEvent(payload){
        logger.info('on Auth event', payload);
        this.loadUser();
    }

    loadUser() {
        Auth.currentAuthenticatedUser()
            .then(user => this.setState({ user: user }))
            .catch(err => this.setState({ user: null }));
    }

    handleSidebarDisplay(e) {
        e.preventDefault();
        if (window.innerWidth < 468) {
          this.state.displaySidebar = !this.state.displaySidebar;
        } else {
            this.state.displaySidebar = true;
        }
    }

    render() {
        const user  = this.state.user;

        return(
            <React.Fragment>
                <SidebarContainer displaySidebar={this.state.displaySidebar}>
                    <SidebarWrapper>
                        <SidebarToggleWrapper>
                            <SidebarToggler
                            displaySidebar={this.state.displaySidebar}
                            onClick={this.handleSidebarDisplay}
                            >
                            <div className="outer__circle">
                                <div className="inner__circle" />
                            </div>
                            </SidebarToggler>
                        </SidebarToggleWrapper>
                        {/* Render the SidebarItems component */}
                        <ItemHeadingContainer displaySidebar={this.state.displaySidebar}>
                            <ItemHeadingWrapper>
                            <ItemHeadingName>
                                User
                            </ItemHeadingName>
                            </ItemHeadingWrapper>
                        </ItemHeadingContainer>
                        <ItemContainer>
                            <ItemWrapper>
                                { user? 'Hi ' + user.username : 'Please sign in' }
                            </ItemWrapper>
                            <ItemWrapper>
                                { user && <button onClick={signOut}>Sign Out</button> }
                            </ItemWrapper>
                        </ItemContainer>
                        <SidebarItems displaySidebar={this.state.displaySidebar} />
                    </SidebarWrapper>
                </SidebarContainer>
                        {/* Render the children */}
                <Children displaySidebar={this.state.displaySidebar}>{this.props.Children}</Children>
            </React.Fragment>
        )
    }
}