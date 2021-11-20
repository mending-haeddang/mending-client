import React from "react";
import AnswerBox from "./AnswerBox";
import styled from "styled-components";
import position from "./position";

const AnswerBoxWrap = ({ answers }) => {
  return (
    <StyledAnswerBoxWrap>
      {answers.map((ans, index) => (
        <AnswerBox key={index} index={index} ans={ans} pos={position[index]} />
      ))}
    </StyledAnswerBoxWrap>
  );
};

const StyledAnswerBoxWrap = styled.div`
  width: 100vw;
  height: 642px;
  box-sizing: border-box;
`;

export default AnswerBoxWrap;
