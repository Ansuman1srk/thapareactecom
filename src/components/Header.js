import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <h2>MG</h2>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  ${'' /* background-color: ${({ theme }) => theme.colors.bg}; */}
 
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  h2{
    color:white;
    font-size: 4rem;
    font-weight:600;
  }
  .logo {
    height: 3rem;
    
  }
`;
export default Header;