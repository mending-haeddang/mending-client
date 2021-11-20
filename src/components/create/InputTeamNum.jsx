import React from "react";
import styled from "styled-components";
import colors from "../../libs/constant/colors";

const InputTeamNum = ({ setIsComplete }) => {
  const handlerClick = () => {
    setIsComplete(true);
  };
  return (
    <StyledInputWrap>
      <span>모두 몇 명 인가요?</span>
      <StyledInputNum type="text" placeholder="최소 2명, 최대 5명"></StyledInputNum>
      <StyledBtn onClick={handlerClick}>완료</StyledBtn>
    </StyledInputWrap>
  );
};

export default InputTeamNum;

const StyledInputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > span {
    font-size: 40px;
    color: ${colors.subText};
  }
`;
const StyledInputNum = styled.input`
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
