import React from 'react'
import { styled } from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'

interface BackButtonProps {
    onClick: () => void;
}

const StyledBackButton = styled.button`
    display: flex;
    justify-content: center; 
    border: 1px solid black;
    border-radius: 7px;
    width: 50px;
    cursor: pointer;
    align-items: center;

    &:hover {
        background-color: black;
        color: #fff;
        transition: 0.5s;
    }
`
const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
    return <StyledBackButton onClick={onClick}><FaArrowLeft /></StyledBackButton>
}

export default BackButton
