// src/components/Sidebar/SidebarItems.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
  ItemHeadingContainer,
  ItemHeadingWrapper,
  ItemHeadingName,
} from "./SidebarElements";
import SidebarAuth from "./SidebarAuth"

import { SIDEBAR_DATA } from "../Data";

function checkUser() {
  Auth.currentAuthenticatedUser().then(user => console.log({ user })).catch(err => console.log(err))
}

function signOut() {
  Auth.signOut().then(data => console.log(data)).catch(err => console.log(err))
}

const SidebarItems = ({ displaySidebar }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [curUser, setCurUser] = useState(checkUser);

  return (
    <ItemsList>
      <ItemHeadingContainer displaySidebar={displaySidebar}>
        <ItemHeadingWrapper>
          <ItemHeadingName>
            User
          </ItemHeadingName>
        </ItemHeadingWrapper>
      </ItemHeadingContainer>
      <SidebarAuth/>
      <ItemContainer>
        <ItemWrapper>
          <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
        </ItemWrapper>
      </ItemContainer>
      <ItemContainer>
        <ItemWrapper>
          <button onClick={checkUser}>Check User</button>
        </ItemWrapper>
      </ItemContainer>
      <ItemContainer>
        <ItemWrapper>
          <button onClick={signOut}>Sign Out</button>
        </ItemWrapper>
      </ItemContainer>
      <ItemHeadingContainer displaySidebar={displaySidebar}>
        <ItemHeadingWrapper>
          <ItemHeadingName>
            Menu
          </ItemHeadingName>
        </ItemHeadingWrapper>
      </ItemHeadingContainer>
      {SIDEBAR_DATA.map((itemData, index) => (
        <ItemContainer
          key={index}
          onClick={() => setActiveItem(itemData.id)}
          /* Adding active class when the user clicks */
          className={itemData.id === activeItem ? "active" : ""}
        >
          <Link to={itemData.path}>
            <ItemWrapper>
              <ItemName displaySidebar={displaySidebar}>
                {itemData.name}
              </ItemName>
            </ItemWrapper>
          </Link>
        </ItemContainer>
      ))}
    </ItemsList>
  );
};

export default SidebarItems;