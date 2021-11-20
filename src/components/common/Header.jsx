import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/lettering_white.svg";
const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} />
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
  width: 98vw;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 180px;
    height: 80px;
  }
`;
export default Header;
