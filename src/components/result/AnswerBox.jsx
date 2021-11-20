import React from "react";
import styled from "styled-components";

const AnswerBox = ({ index, ans, pos }) => {
  console.log(index);
  const { name, answer } = ans;
  return (
    <StyledAnswerBox pos={pos} index={index}>
      <p>{name}</p>
      <p>{answer}</p>
    </StyledAnswerBox>
  );
};

const StyledAnswerBox = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  animation-duration: 5s;
  animation-name: popup;
  animation-delay: ${(props) => props.index}s;
  animation-fill-mode: backwards;
  position: absolute;
  z-index: ${(props) => props.index}px;
  left: ${(props) => props.pos.x}px;
  top: ${(props) => props.pos.y}px;
  p {
    margin: 0;
  }
  p:first-child {
    font-weight: bold;
  }
  p:last-child {
    color: gray;
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
