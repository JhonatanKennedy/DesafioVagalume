import styled, { keyframes } from 'styled-components';

const Appear = keyframes`
    from{
        transform: translateX(20vw);
    }
    to{
        transform: translateX(0);
    }
`;

const Hide = keyframes`
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(20vw);
        opacity: 0;
    }
`;

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    left:0;
    top:0;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

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
    animation: ${Appear} 1s;
    
`;

export const HideContainer = styled.div`
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
    animation: ${Hide} 1s;    
`;
