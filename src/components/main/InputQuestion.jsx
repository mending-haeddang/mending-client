import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Active from "../../assets/icons/btn_check_active.svg";
import InActive from "../../assets/icons/btn_check_inactive.svg";
const InputQuestion = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  // const { id } = useParams();
  // let name = id.replace(":", "");
  // name = parseInt(name, 10);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setIsChecked(true);
    navigate(`/result/0`);
  };

  return (
    <StyledInputQuestion onSubmit={(e) => handlerSubmit(e)}>
      <StyledInputWrapper>
        <input placeholder="답변을 입력하세요" />
        <input type="submit" />
        <StyledCheckButton url={isChecked ? Active : InActive} />
      </StyledInputWrapper>
    </StyledInputQuestion>
  );
};

export default InputQuestion;
const StyledInputQuestion = styled.form`
  position: absolute;
  bottom: 121px;
`;
const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  border: 1px solid white;
  border-radius: 32.5px;
  background-color: transparent;
  width: 630px;
  height: 65px;

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
  }
  input::placeholder {
    font-size: 24px;
    line-height: 29px;
    color: #8f8f8f;
  }
  input:nth-child(2) {
    display: none;
  }
`;
const StyledCheckButton = styled.button`
  background-image: ${({ url }) => `url(${url})`};
  background-color: transparent;
  border: none;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  top: 50%;
  right: 15px;
  position: absolute;
  transform: translateY(-50%);
  cursor: pointer;
`;
