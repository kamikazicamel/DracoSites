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
    AuthWrapper,
} from "./NavigatorElements";
import SidebarItems from './SidebarItems';
import UserContext from '../Auth/UserContext';
import AuthSideBarWidget from '../Auth/AuthSidebarWidget';


const MOBILE_VIEW = window.innerWidth < 468;
//const user = undefined;

export default class Navigator extends Component {
    static contextType = UserContext;
    constructor(props){
        super(props);

        this.handleSidebarDisplay = this.handleSidebarDisplay.bind(this);

        this.state = { displaySidebar:!MOBILE_VIEW }
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
                        <AuthWrapper displaySidebar={this.state.displaySidebar}>
                            <ItemWrapper>
                                <AuthSideBarWidget />
                            </ItemWrapper>
                        </AuthWrapper>
                        <SidebarItems displaySidebar={this.state.displaySidebar} />
                    </SidebarWrapper>
                </SidebarContainer>
                        {/* Render the children */}
                <Children displaySidebar={this.state.displaySidebar}>{this.props.Children}</Children>
            </React.Fragment>
        )
    }
}