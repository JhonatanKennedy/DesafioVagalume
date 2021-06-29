import styled, { keyframes } from 'styled-components';

const Appear = keyframes`
    0%{
        transform: translateX(20vw);
    }
    25%{
        transform: translateX(0);
    }
    75%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`;

export const ModalContainer = styled.div`
    position: absolute;
    right:0;
    top:0;
    height: 100vh;
`;

export const Container = styled.div`
    margin-top: 3vh;
    background-color: #FC5A5A;
    width: 20vw;
    height: 10vh;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    p{
        align-self: center;
    }
    button{
        align-self: flex-start;
        background-color: #FC5A5A;
        color: white;
        cursor: pointer;
    }
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    border-top: 2px solid white;
    animation: ${Appear} 4s;
`;
