import React from "react";
import styled from "styled-components";
import colors from "../../libs/constant/colors";

const ShowCode = () => {
  const code = "GJD3890";
  const handlerClick = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log("Text copied.");
        alert("클립보드에 복사되었습니다.");
      })
      .catch(() => {
        console.log("Failed to copy text.");
      });
  };
  return (
    <StyledWrap>
      <StyledCodeWrap>
        <span>멜팅 코드</span>
        <StyledCode>{code}</StyledCode>
        <StyledBtn onClick={handlerClick}>복사</StyledBtn>
      </StyledCodeWrap>
      <StyledTextDiv>
        <p>멜팅 코드를 친구들에게 공유해주세요!</p>
        <p>설정한 인원이 모두 들어오면 알려드릴게요.</p>
      </StyledTextDiv>
    </StyledWrap>
  );
};

export default ShowCode;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledCodeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > span {
    font-size: 40px;
    text-align: center;
    color: ${colors.subText};
  }
`;

const StyledCode = styled.div`
  font-size: 24px;
  width: 345px;
  height: 65px;
  border-radius: 50px;
  outline: 0;
  border: 2px solid ${colors.subText};
  background-color: #00000000;
  margin-top: 20px;
  text-align: center;
  line-height: 65px;
  color: ${colors.subText};
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

const StyledTextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
  color: ${colors.subText};
  font-weight: bold;
  font-size: 24px;
`;
