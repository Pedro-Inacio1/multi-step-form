import React from 'react'
import { styled } from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'

interface BackButtonProps {
    onClick: () => void;
}

const StyledBackButton = styled.button` 
    display: flex;
    justify-content: center;
    align-items: center;
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
`
const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
    return <StyledBackButton type='button' onClick={onClick}><FaArrowLeft /></StyledBackButton>
}

export default BackButton
