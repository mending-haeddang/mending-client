import React from "react";
import styled from "styled-components";

const NextButton = () => {
  return <StyledNextButton>다음 질문</StyledNextButton>;
};

const StyledNextButton = styled.button`
  border: none;
  background-color: white;
  color: black;
  width: 129px;
  height: 46px;
  border-radius: 23px;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 121px;
  font-family: "Spoqa Han Sans Neo";
`;

export default NextButton;
