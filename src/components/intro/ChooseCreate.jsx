import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ChooseCreate = () => {
  return (
    <StyledChooseWrap>
      <span>어떻게 하고 싶으신가요?</span>
      <StyledBtnWrap>
        <Link to="/create">
          <StyledBtn>방생성</StyledBtn>
        </Link>
        <Link to="/join">
          <StyledBtn>방입장</StyledBtn>
        </Link>
      </StyledBtnWrap>
    </StyledChooseWrap>
  );
};

export default ChooseCreate;

const StyledChooseWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBtn = styled.div``;
