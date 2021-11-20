import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router";
import StartView from "../components/main/StartView";
import styled from "styled-components";
import fire from "../assets/images/fire.gif";
import { getQuestions } from "../libs/api";

const Main = () => {
  const navigate = useNavigate();
  const [isStart, setIsStart] = useState(true);

  const renderStartView = (data) => {
    setTimeout(() => {
      setIsStart(false);
      navigate("./:0", { state: data });
    }, 5500);
  };

  useEffect(() => {
    (async () => {
      const { data } = await getQuestions();
      console.log(data);
      renderStartView(data);
    })();
  }, []);

  return (
    <StyledMain>
      <img src={fire} />
      {isStart && <StartView />}
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  width: 100vw;
  height: calc(100vh - 220px);
  color: white;
  display: flex;
  justify-content: center;
  position: relative;

  img {
    width: 331px;
    height: 440px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
