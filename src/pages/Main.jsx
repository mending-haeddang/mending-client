import React, { useEffect } from "react";
// import axios from "axios";
import { Routes, Route } from "react-router";
import StartView from "../components/main/StartView";
import StartQuestions from "../components/main/StartQuestions";
import styled from "styled-components";
const Main = () => {
  // const navigate = useNavigate();
  // const [isStart, setIsStart] = useState(true);

  const renderStartView = () => {
    setTimeout(() => {
      // setIsStart(false);
      // navigate("./:3");
    }, 3000);
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
      <StartView />
      <Routes>
        {/* 프롭으로 데이터 준다 */}
        <Route path="/:3" element={<StartQuestions />} />
        <Route path="/:3/result" element={<div>result</div>} />
      </Routes>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  width: 100vw;
  height: calc(100vh - 220px);
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
`;
