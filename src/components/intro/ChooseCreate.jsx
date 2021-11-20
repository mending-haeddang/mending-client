import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../libs/constant/colors";

const ChooseCreate = ({ userName }) => {
  return (
    <StyledChooseWrap>
      <span>{userName} 님은 어떤 분이신가요?</span>
      <StyledAllBtnWrap>
        <StyledBtnWrap>
          <span>멜팅을 제안하는</span>
          <Link to="/create">
            <StyledBtn>멜터</StyledBtn>
          </Link>
        </StyledBtnWrap>
        <StyledBtnWrap>
          <span>멜팅에 초대받은</span>
          <Link to="/join">
            <StyledBtn>멜티</StyledBtn>
          </Link>
        </StyledBtnWrap>
      </StyledAllBtnWrap>
    </StyledChooseWrap>
  );
};

export default ChooseCreate;

const StyledChooseWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colors.subText};
  gap: 40px;
  & > span {
    font-size: 40px;
  }
`;

const StyledAllBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 46px;
`;
const StyledBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 8px;
  & > a {
    text-decoration: none;
  }
`;

const StyledBtn = styled.div`
  width: 152px;
  height: 65px;
  border-radius: 50px;
  border: 3px solid ${colors.subText};
  background-color: #00000000;
  color: ${colors.subText};
  font-size: 40px;
  line-height: 65px;
`;
