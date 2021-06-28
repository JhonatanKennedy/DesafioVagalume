import styled, { keyframes } from 'styled-components';
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

const Appear = keyframes`
    from{
        opacity: 0;
        transform: translateY(600px);
    }
    to{
        opacity: 1;
        transform: translateY(0);
    }
`;

export const AnimationContainer = styled.div`
    animation: ${Appear} 1s;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    @media only screen and (min-width: 1880px){
        width: 30vw;
        height: 50vh;
    }
    @media only screen and (min-width: 768px){
        width: 40vw;
        height: 65vh;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const InputContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    input{
        font-size: 1.6rem;
    }
    p{
        position: fixed;
        margin-top: -10px;
        font-size: 1.2rem;
        color: red;
    }
    div{
        width: 80%;
    }
`;

export const LoginButton = styled.button`
    color: white;
    background: ${deepPurple[500]};
    padding: 0.8rem;
    font-size: 1.6rem;
    border: 2px solid ${deepPurple[500]};
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    align-items: center;
    &:hover{
        background-color: white;
        color: ${deepPurple[500]};
    }
`;