import React from "react";
import styled from "styled-components";
import colors from "../../libs/constant/colors";

const InputCode = ({ setIsComplete }) => {
  const handlerClick = () => {
    setIsComplete(true);
  };
  return (
    <StyledWrap>
      <span>멜팅 코드를 입력해주세요.</span>
      <StyledInput type="text" placeholder="여기에 입력해주세요."></StyledInput>
      <StyledBtn onClick={handlerClick}>완료</StyledBtn>
    </StyledWrap>
  );
};

export default InputCode;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > span {
    font-size: 40px;
    color: ${colors.subText};
  }
`;

const StyledInput = styled.input`
  width: 345px;
  height: 65px;
  border-radius: 50px;
  outline: 0;
  border: 2px solid ${colors.subText};
  background-color: ${colors.main};
  margin-top: 20px;
  text-align: center;
  color: ${colors.subText};
  font-size: 24px;
`;

const StyledBtn = styled.button`
  width: 96px;
  height: 46px;
  margin-top: 40px;
  border-radius: 50px;
  border: 2px solid ${colors.subText};
  color: black;
  font-size: 24px;
  font-weight: bold;
`;
