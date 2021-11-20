import React, { useEffect } from "react";
import Question from "../components/result/Question";
import AnswerBoxWrap from "../components/result/AnswerBoxWrap";
import NextButton from "../components/result/NextButton";
import styled from "styled-components";
import { getAnswers } from "../libs/api";

const Result = () => {
  useEffect(() => {
    (async () => {
      const data = await getAnswers();
      console.log(data);
    })();
  }, []);

  const answers = [
    { name: "person1", answer: "발리에서 스쿠버 다이빙을 하고 싶어요." },
    { name: "person2", answer: "hello" },
    { name: "person3", answer: "how are you" },
    { name: "person4", answer: "hihihi" },
    { name: "person5", answer: "helloooo" },
  ];

  return (
    <StyledResult>
      <Question text={"hello"} />
      <AnswerBoxWrap answers={answers} />
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
