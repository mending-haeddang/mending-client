import React, { useEffect } from "react";
import styled from "styled-components";
import loading from "../../assets/images/loading.gif";
import colors from "../../libs/constant/colors";
import { useNavigate } from "react-router";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/main");
    }, 3000);
  }, []);

  return (
    <StyledWrap>
      <img src={loading}></img>
      <StyledText>
        <p>잠시만 기다려주세요</p>
        <p>모두 들어오면 알려드릴게요.</p>
      </StyledText>
    </StyledWrap>
  );
};
export default Loading;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > img {
    width: 138px;
    height: 138px;
  }
`;

const StyledText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
  color: ${colors.subText};
  font-weight: bold;
  font-size: 24px;
`;
