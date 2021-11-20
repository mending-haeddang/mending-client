import React from "react";
import styled from "styled-components";

const InputTeamNum = () => {
  return (
    <StyledInputWrap>
      <span>팀수?</span>
      <StyledInputNum type="number"></StyledInputNum>
      <StyledBtn>완료</StyledBtn>
    </StyledInputWrap>
  );
};

export default InputTeamNum;

const StyledInputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledInputNum = styled.input``;
const StyledBtn = styled.button``;
