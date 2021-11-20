import React from "react";
import Title from "../components/ending/Title";
import Button from "../components/ending/Button";
import styled from "styled-components";

const Ending = () => {
  return (
    <StyledEnding>
      <Title />
      <Button />
    </StyledEnding>
  );
};

const StyledEnding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Ending;
