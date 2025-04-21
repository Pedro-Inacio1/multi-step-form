import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

interface NextButtonProps {
  onClick: () => void;
}

const StyledNextButton = styled.button`
  border-radius: 10px;
  width: 50px;
  border: 1px solid black;
  height: 40px;

  &:hover {
    background-color: black;
    color: #fff;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
`;

const NextButton:React.FC<NextButtonProps> = ({onClick}) => {
  return <StyledNextButton onClick={onClick} className="flex justify-center items-center"><FaArrowRight/></StyledNextButton>;
};

export default NextButton;
