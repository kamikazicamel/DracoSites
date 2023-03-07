import styled from "styled-components";

// Children Component
export const Children = styled.div`
  width: 100%;
  height: 100%;
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "15rem" : "5rem")};
  @media (max-width: 468px) {
    margin-left: 5rem;
  }
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
`;

export const SidebarToggleWrapper = styled.div`
  padding: 0.5rem 1 rem;
  margin-bottom: 1rem;
  display: none;
  justify-content: ${({ displaySidebar }) =>
    displaySidebar ? "space-between" : "center"};
  align-items: center;
  @media (max-width: 468px) {
    justify-content: center;
    display: flex;
  }
`;

export const SidebarToggler = styled.button`
  cursor: pointer;
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
  @media (max-width: 468px) {
    display: block;
  }
`;

// SidebarItem styles
export const ItemsList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

export const ItemHeadingContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0.25rem;
  border-radius: 0.2rem;
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
  background-color: #003399;
`;

export const ItemHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const ItemHeadingName = styled.span`
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "0.5rem" : "0")};
  text-transform: capitalize;
`;

export const ItemContainer = styled.li`
  width: 100%;
  padding: 0.5rem 0.25rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background: #eaeced;
  }
  &.active {
    background-color: #dbe4f3;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #7c7788;
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
  color: #7c7788;
`;

export const ItemName = styled.span`
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "0.5rem" : "0")};
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
  text-transform: capitalize;
`;

// Sidebar Container
export const SidebarContainer = styled.div`
  position: absolute;
  left: 0;
  width: ${({ displaySidebar }) => (displaySidebar ? "15rem" : "2rem")};
  height: 100vh;
  padding: 0.75rem;
  background: #f3f4f4;
  transition: width 350ms ease;
  border-right: 1px solid #d4d8dd;
  overflow-x: hidden;
  ${({ displaySidebar }) =>
    displaySidebar && "box-shadow: 8px 0px 12px 0px rgba(0,0,0,0.1)"};
  ${ItemWrapper} {
    justify-content: ${({ displaySidebar }) => !displaySidebar && "center"};
  }
  ::-webkit-scrollbar {
    width: 4px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #eaeced;
    &:hover {
      background: #d5e0f3;
    }
  }
`;