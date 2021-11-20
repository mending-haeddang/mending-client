import React from "react";
import styled from "styled-components";

const Button = () => {
  return <StyledButton>더 하고 싶다면?</StyledButton>;
};

const StyledButton = styled.button`
  width: 160px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background-color: black;
  color: white;
`;

export default Button;
