import React from "react";
import styled from "styled-components";

const ShowCode = () => {
  return (
    <StyledWrap>
      <StyledCodeWrap>
        <span>팀코드:</span>
        <StyledBtn>복사</StyledBtn>
      </StyledCodeWrap>
      <div>공유하세요~ 설정한 인원이 모두 들어오면 자동으로 시작합니다.</div>
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

const StyledCodeWrap = styled.div``;

const StyledBtn = styled.button``;
