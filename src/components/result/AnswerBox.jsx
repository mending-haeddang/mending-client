import React from "react";
import styled from "styled-components";

const AnswerBox = ({ index, ans, pos }) => {
  const { name, answer } = ans;
  return (
    <StyledAnswerBox pos={pos} index={index}>
      <p>{name}</p>
      <p>{answer}</p>
    </StyledAnswerBox>
  );
};

const StyledAnswerBox = styled.div`
  width: 391px;
  height: 134px;
  border-radius: 67px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);
  animation-duration: 5s;
  animation-name: popup;
  animation-delay: ${(props) => props.index}s;
  animation-fill-mode: backwards;
  position: absolute;
  z-index: ${(props) => props.index + 5};
  margin-left: ${(props) => props.pos.x}px;
  margin-top: ${(props) => props.pos.y}px;
  p {
    margin: 0 60px;
  }
  p:first-child {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 5px;
    margin-top: -3px;
  }
  p:last-child {
    font-weight: bold;
    font-size: 30px;
    word-break: keep-all;
    text-align: center;
    line-height: 1.2;
  }

  @keyframes popup {
    from {
      opacity: 0;
      transform: translateY(150%);
    }
    to {
      opacity: 1;
    }
  }
`;

export default AnswerBox;
