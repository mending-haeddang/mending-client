import React from "react";
import styled from "styled-components";
import colors from "../../libs/constant/colors.js";
import { ReactComponent as dot } from "../../assets/icons/dot.svg";

const InputName = ({ userName, setUserName, setIsComplete }) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    setIsComplete(true);
  };

  const handlerChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <StyledInputWrap>
      <StyledDotImg />
      <StyledIntroWrap>
        <p>처음 만난 우리, 아직 조금 서먹하지만 서로 가까워지고 싶은 마음이에요.</p>
        <p>모닥불 옆에 둘러 앉아 질문을 주고 받으며 서로를 알아가보는 건 어떨까요?</p>
        <p>어색함을 녹이는 우리들의 캠프파이어. 지금부터 시작해봐요.</p>
      </StyledIntroWrap>
      <StyledNameWrap>
        <span>당신의 이름을 입력해주세요.</span>
        <form onSubmit={handlerSubmit}>
          <StyledInputField type="text" value={userName} onChange={handlerChange}></StyledInputField>
        </form>
        <StyledCompleteBtn onClick={handlerSubmit}>완료</StyledCompleteBtn>
      </StyledNameWrap>
    </StyledInputWrap>
  );
};

export default InputName;

const StyledInputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledIntroWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 90px;
  color: ${colors.subText};
  font-weight: bold;
  font-size: 24px;
  & > p:nth-child(3) {
    margin-top: 20px;
  }
`;

const StyledNameWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 162px;
  color: ${colors.subText};
  font-weight: bold;
  font-size: 24px;
`;

const StyledInputField = styled.input`
  width: 345px;
  height: 65px;
  border-radius: 50px;
  outline: 0;
  border: 2px solid ${colors.subText};
  background-color: ${colors.main};
  margin-top: 12px;
  text-align: center;
  color: ${colors.subText};
  font-size: 24px;
`;

const StyledCompleteBtn = styled.button`
  width: 96px;
  height: 46px;
  margin-top: 40px;
  border-radius: 50px;
  border: 2px solid ${colors.subText};
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 138px;
`;

const StyledDotImg = styled(dot)`
  width: 16px;
  height: 96px;
`;
