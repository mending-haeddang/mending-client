import React, { useState } from "react";
import ChooseCreate from "../components/intro/ChooseCreate";
import InputName from "../components/intro/InputName";
import styled from "styled-components";

const Intro = () => {
  const [userName, setUserName] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  return (
    <StyledWrap>
      {isComplete ? (
        <ChooseCreate userName={userName} />
      ) : (
        <InputName userName={userName} setUserName={setUserName} setIsComplete={setIsComplete} />
      )}
    </StyledWrap>
  );
};

export default Intro;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
