import React from "react";
import Title from "../components/ending/Title";
import Button from "../components/ending/Button";
import styled from "styled-components";
import fire from "../assets/images/fire.gif";

const Ending = () => {
  return (
    <StyledEnding>
      <Title />
      <Button />
      <img src={fire} alt="fire" />
    </StyledEnding>
  );
};

const StyledEnding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 331px;
    height: 400px;
    position: absolute;
    top: 480px;
    left: 800px;
    z-index: 0;
  }
`;

export default Ending;
