import React, { useState, useEffect } from "react";
import Question from "../components/result/Question";
import AnswerBoxWrap from "../components/result/AnswerBoxWrap";
import NextButton from "../components/result/NextButton";
import styled from "styled-components";
import { getAnswers } from "../libs/api";

const Result = () => {
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getAnswers();
      setAnswers(data.data.data);
    })();
  }, []);

  return (
    <StyledResult>
      <Question text={"당신의 MBTI는?"} />
      {answers && <AnswerBoxWrap answers={answers} />}
      <NextButton />
    </StyledResult>
  );
};

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export default Result;
