import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router";
import StartView from "../components/main/StartView";
import styled from "styled-components";
import fire from "../assets/images/fire.gif";
const Main = () => {
  const navigate = useNavigate();
  const [isStart, setIsStart] = useState(true);

  const renderStartView = () => {
    setTimeout(() => {
      setIsStart(false);
      navigate("./:3");
    }, 5500);
  };

  useEffect(() => {
    const getMembersInfo = async () => {
      // const data = await axios.get("aaaa");
    };

    getMembersInfo();
    renderStartView();
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
