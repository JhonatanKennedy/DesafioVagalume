import styled from 'styled-components';

export const LogOutContainer = styled.div`
    width: 45px;
    height: 45px;
    position: fixed;
    border-radius: 50%;
    border: none;
    color: #f3fcfd;
    background-color: #1b1b1b;
    font-size: 2.4rem;
    cursor: pointer;
    z-index: 1;
    top: 2%;
    right: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #ff9900;
        color: black;
    }
`;