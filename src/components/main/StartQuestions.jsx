import React from "react";
import styled from "styled-components";
import ShowQuestion from "./ShowQuestion";
import InputQuestion from "./InputQuestion";
const StartQuestions = () => {
  return (
    <StyledStartQuestions>
      <ShowQuestion />
      <InputQuestion />
    </StyledStartQuestions>
  );
};

export default StartQuestions;

const StyledStartQuestions = styled.div`
  width: 100%;
  height: 100%;
`;
