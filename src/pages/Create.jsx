import React, { useState } from "react";
import InputTeamNum from "../components/create/InputTeamNum";
import ShowCode from "../components/create/ShowCode";
import styled from "styled-components";

const Create = () => {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <StyledWrap>
      {isComplete ? <ShowCode></ShowCode> : <InputTeamNum setIsComplete={setIsComplete}></InputTeamNum>}
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
`;
