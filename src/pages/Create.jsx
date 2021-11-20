import React from "react";
// import InputTeamNum from "../components/create/InputTeamNum";
import ShowCode from "../components/create/ShowCode";
import styled from "styled-components";

const Create = () => {
  return (
    <StyledWrap>
      {/* <InputTeamNum></InputTeamNum> */}
      <ShowCode></ShowCode>
    </StyledWrap>
  );
};

export default Create;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #24212d;
`;
