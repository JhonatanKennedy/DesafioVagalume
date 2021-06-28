import styled, { keyframes } from 'styled-components';

const isRotating = keyframes`
    to {
        transform: rotate(1turn);
    }
`;

export const Loading = styled.div`
    display: flex;
    justify-content: center;

    div{
        animation: ${isRotating} 1s infinite;
        border: 6px solid #404040;
        border-radius: 50%;
        border-top-color: #ff9900;
        height: 50px;
        width: 50px;
    }
`;