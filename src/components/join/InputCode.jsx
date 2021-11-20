import React from "react";
import styled from "styled-components";

const InputCode = () => {
  return (
    <StyledWrap>
      <span>팀 코드 입력</span>
      <StyledInput type="text"></StyledInput>
      <StyledBtn>완료</StyledBtn>
    </StyledWrap>
  );
};

export default InputCode;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled.input``;

const StyledBtn = styled.button``;
