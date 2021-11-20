import React from "react";
import styled from "styled-components";

const NextButton = () => {
  return <StyledNextButton>다음 질문</StyledNextButton>;
};

const StyledNextButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  margin-top: 20px;
`;

export default NextButton;
