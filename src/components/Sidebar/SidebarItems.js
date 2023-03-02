// src/components/Sidebar/SidebarItems.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
} from "./SidebarElements";

import { SIDEBAR_DATA } from "../Data";

const SidebarItems = ({ displaySidebar }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <ItemsList>
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