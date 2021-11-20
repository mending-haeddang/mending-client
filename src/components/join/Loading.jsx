import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <StyledWrap>
      <StyledProgressDiv></StyledProgressDiv>
      <span>로딩중</span>
    </StyledWrap>
  );
};
export default Loading;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledProgressDiv = styled.div``;
