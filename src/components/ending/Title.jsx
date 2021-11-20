import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <StyledTitle>
      <p>멜팅 되셨나요?</p>
      <p>캠프 파이어는 끝났지만, 우리의 인연은 이제 시작이에요.</p>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 40px;
  margin-top: 60px;
  color: white;
  animation-name: fadein;
  animation-duration: 3s;

  p {
    margin: 0;
    text-align: center;
  }

  @keyframes fadein {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Title;
