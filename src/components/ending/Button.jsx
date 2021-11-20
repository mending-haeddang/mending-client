import React from "react";
import styled from "styled-components";

const Button = () => {
  return <StyledButton>더 하고 싶다면?</StyledButton>;
};

const StyledButton = styled.button`
  width: 190px;
  height: 46px;
  border-radius: 23px;
  border: none;
  background-color: white;
  color: black;
  margin-top: 603px;
  font-weight: bold;
  font-size: 24px;
  font-family: "Spoqa Han Sans Neo";
`;

export default Button;
