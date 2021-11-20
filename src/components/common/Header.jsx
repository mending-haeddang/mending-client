import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/lettering_white.svg";
const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} />
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
  width: 100vw;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  img {
    width: 180px;
    height: 80px;
  }
`;
export default Header;
