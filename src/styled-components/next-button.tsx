import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const StyledNextButton = styled.button`
  border-radius: 10px;
  width: 3%;
  border: 1px solid black;
  height: 40px;

  &:hover {
    background-color: black;
    color: #fff;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
`;

const NextButton = () => {
  return <StyledNextButton className="flex justify-center items-center"><FaArrowRight/></StyledNextButton>;
};

export default NextButton;
