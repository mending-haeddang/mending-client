import React from "react";
import Question from "../components/result/Question";
import AnswerBoxWrap from "../components/result/AnswerBoxWrap";
import NextButton from "../components/result/NextButton";

const Result = () => {
  const answers = [
    { name: "person1", answer: "hi" },
    { name: "person2", answer: "hello" },
    { name: "person3", answer: "how are you" },
  ];

  return (
    <>
      <Question text={"hello"} />
      <AnswerBoxWrap answers={answers} />
      <NextButton />
    </>
  );
};

export default Result;
