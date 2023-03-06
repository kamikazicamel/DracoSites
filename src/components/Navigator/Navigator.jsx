//https://github.com/richardzcode/Journal-AWS-Amplify-Tutorial/blob/master/step-02/journal/src/components/Navigator.jsx
//https://richardzcode.github.io/Journal-AWS-Amplify-Tutorial/step-03/
import React, {Component, useContext} from 'react';
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
    ItemsList,
} from "./NavigatorElements";
import { Auth, Hub, Logger } from 'aws-amplify';
import SidebarItems from './SidebarItems';
import { JSignIn, JSignOut } from '../Auth';
import UserContext from '../Auth/UserContext';


const logger = new Logger('Navigator');

const MOBILE_VIEW = window.innerWidth < 468;
//const user = undefined;

export default class Navigator extends Component {
    static contextType = UserContext;
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

        this.state = { user: null, displaySidebar:!MOBILE_VIEW}
        //console.log(user);
        //const user = this.context;
    }

    componentDidMount() {
        //user = this.context;
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
           this.setState({ displaySidebar: !this.state.displaySidebar});
        } else {
            this.setState({displaySidebar: true});
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
                        <ItemsList>
                            <ItemContainer>
                                <ItemWrapper>
                                    { user? 'Hi ' + user.username : <JSignIn /> }
                                </ItemWrapper>
                                <ItemWrapper>
                                    
                                        
                                        
                                </ItemWrapper>
                                <ItemWrapper>
                                    { user && <JSignOut /> }
                                </ItemWrapper>
                            </ItemContainer>
                        </ItemsList>
                        <SidebarItems displaySidebar={this.state.displaySidebar} />
                    </SidebarWrapper>
                </SidebarContainer>
                        {/* Render the children */}
                <Children displaySidebar={this.state.displaySidebar}>{this.props.Children}</Children>
            </React.Fragment>
        )
    }
}