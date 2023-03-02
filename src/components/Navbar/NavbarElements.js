import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    margin: 0;
    padding: o;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
    display: block;
    @media (max-width: 800px){
        display: none;
    }
`;

export const NavLink = styled(Link)`
    color: black;
    display: block;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active{
        background-color: #04aa6d;
        color: white;
    }
`;

export const NavMenu = styled.div`
    align-items: center;
    margin-right:-24px;
    @media screen and (max-width: 800px){
        display: none;
    }
`;