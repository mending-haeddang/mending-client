import React from "react";
import styled from "styled-components";
const StartView = () => {
  return (
    <StyledStartView>
      <div>
        모든 분들이 오셨어요!
        <br />
        멜팅될 준비 되셨나요?
      </div>
      <div>곧 질문이 나올거에요</div>
    </StyledStartView>
  );
};

export default StartView;

const StyledStartView = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  animation: fade 1.2s ease 2s;

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
  }
  div:last-child {
    bottom: 0;
  }
`;
