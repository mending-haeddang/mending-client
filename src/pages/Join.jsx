import React, { useState } from "react";
import styled from "styled-components";
import InputCode from "../components/join/InputCode";
import Loading from "../components/join/Loading";

const Join = () => {
  const [isComplete, setIsComplete] = useState(false);
  return <StyledWrap>{isComplete ? <Loading /> : <InputCode setIsComplete={setIsComplete} />}</StyledWrap>;
};

export default Join;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
