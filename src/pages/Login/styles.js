import styled from 'styled-components';
import Background from '../../assets/backgroundLogin.jpg';
import { deepPurple } from '@material-ui/core/colors';

export const LoginPage = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${Background}) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
`;

export const LoginContainer = styled.div`
    width: 40vw;
    height: 65vh;
    background: #ffffff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form{
        margin-left: 10%;
        font-size: 1.4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: flex-start;
        width: 50%;
        height: 35%;
    }
    input{
        font-size: 1.6rem;
    }
    p{
        position: fixed;
        margin-top: -10px;
        font-size: 1.2rem;
        color: red;
    }
`;
export const LoginButton = styled.button`
    margin: 0% 5%;
    color: white;
    background: ${deepPurple[500]};
    padding: 0.5rem;
    font-size: 1.6rem;
    border: 2px solid ${deepPurple[500]};
    border-radius: 5px;
    cursor: pointer;
    align-self: flex-end;
    &:hover{
        background-color: white;
        color: ${deepPurple[500]};
    }
`;
