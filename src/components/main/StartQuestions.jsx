import React from "react";
import styled from "styled-components";
import ShowQuestion from "./ShowQuestion";
import InputQuestion from "./InputQuestion";
//프롭으로 데이터 받는다
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
  width: 100vw;
  height: calc(100vh - 220px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 2s ease;
`;
