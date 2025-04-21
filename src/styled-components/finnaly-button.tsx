import styled from "styled-components";

const FinallyButton = styled.button`
    width: 250px;
    height: 45px;
    border-radius: 10px;

    &:hover {
        background-color: black;
        color: #fff;
        transition: 0.4s;
        cursor: pointer;
        border: 4px solid blue;
    }
`

const FinnalyBtn:React.FC = () => {
    return <FinallyButton>Finalizar</FinallyButton>
}

export default FinnalyBtn