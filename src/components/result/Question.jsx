import React from "react";
import styled from "styled-components";

const Question = ({ text = "question" }) => {
  return <StyledQuestion>&quot;{text}&quot;</StyledQuestion>;
};

const StyledQuestion = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

export default Question;
