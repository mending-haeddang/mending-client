import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NextButton = () => {
  const navigate = useNavigate();
  return <StyledNextButton onClick={() => navigate("/ending")}>다음 질문</StyledNextButton>;
};

const StyledNextButton = styled.button`
  border: none;
  background-color: white;
  color: black;
  width: 129px;
  height: 46px;
  border-radius: 23px;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 100px;
  font-family: "Spoqa Han Sans Neo";
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
`;

export default NextButton;
