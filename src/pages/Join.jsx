import React from "react";
import styled from "styled-components";
// import InputCode from "../components/join/InputCode";
import Loading from "../components/join/Loading";

const Join = () => {
  return (
    <StyledWrap>
      {/* <InputCode></InputCode> */}
      <Loading></Loading>
    </StyledWrap>
  );
};

export default Join;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #24212d;
`;
