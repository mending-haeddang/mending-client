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
`;

export default Title;
