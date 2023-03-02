import React, {useState} from "react";
import {
    Children,
    SidebarContainer,
    SidebarWrapper,
    SidebarToggler,
    SidebarToggleWrapper
} from "./SidebarElements";

import SidebarItems from "./SidebarItems";

//import { SidebarItems } from "./SidebarItems";

const MOBILE_VIEW = window.innerWidth < 468;

export default function Sidebar({ children }) {
  const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);

  const handleSidebarDisplay = (e) => {
    e.preventDefault();
    if (window.innerWidth < 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(true);
    }
  };

  return (
    <React.Fragment>
      <SidebarContainer displaySidebar={displaySidebar}>
        <SidebarWrapper>
            <SidebarToggleWrapper>
                <SidebarToggler
                displaySidebar={displaySidebar}
                onClick={handleSidebarDisplay}
                >
                <div className="outer__circle">
                    <div className="inner__circle" />
                </div>
                </SidebarToggler>
            </SidebarToggleWrapper>
            {/* Render the SidebarItems component */}
          <SidebarItems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
            {/* Render the children */}
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
  );
}
