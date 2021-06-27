import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    left:0;
    top:0;
    z-index: 10;
    background: rgba(10,23,55,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 40vw;
    height: 40vh;
    background-color: white;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

export const CloseButton = styled.button`
    align-self: flex-end;
    border-top-right-radius: 15px;
        &:hover{
            background-color: black;
            color: #ff9900;
        }
`;

export const InfoArea = styled.div`
    width: 40vw;
    height: 35vh;
    border-radius: 15px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ButtonYes = styled.button`
    background-color: green;
    color: white;
    padding: 10px 27px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid green;

    &:hover{
        background-color: white;
        color: green;
        border: 1px solid green;
    }
`;

export const ButtonNo = styled.button`
    background-color: red;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid red;
    &:hover{
        background-color: white;
        color: red;
        border: 1px solid red;
    }
`;