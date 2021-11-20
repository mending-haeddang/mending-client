import styled from "styled-components";
import { useParams } from "react-router";
const ShowQuestion = ({ data }) => {
  const { id } = useParams();
  let name = id.replace(":", "");
  name = parseInt(name, 10);
  console.log("hi");
  return <StyledShowQuestion>{data[name].question}</StyledShowQuestion>;
};

export default ShowQuestion;
const StyledShowQuestion = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 60px;
  text-align: center;
  color: #e9e9e9;
`;
