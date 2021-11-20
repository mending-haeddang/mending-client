import React from "react";
import styled from "styled-components";
const StartView = () => {
  return (
    <StyledStartView>
      <div>
        모든 분들이 오셨어요!
        <br />
        멜팅 될 준비 되셨나요?
      </div>
      <div>곧 질문을 드릴게요</div>
    </StyledStartView>
  );
};

export default StartView;

const StyledStartView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    33% {
      opacity: 1;
    }
    66% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: fade 6s ease;

  div {
    width: 370px;
    height: 100px;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #e9e9e9;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div:last-child {
    height: 48px;
    bottom: 129px;
  }
`;
