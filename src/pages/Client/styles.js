import styled, { keyframes } from 'styled-components';
import Background from '../../assets/background.jpg';
import { BackgroundMenu } from '../Main/styles';

export const ClientPage = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 1.6rem;
`;

export const BackgroundM = BackgroundMenu;

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-30px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`;

export const AnimationContainer = styled.div`
    animation: ${appearFromLeft} 1s;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


export const TableChart = styled.div`
    background: #ffffff;
    margin-right: 2.4vw;
    height: 90vh;
    width: 90vw;
    align-self: center;
    border-radius: 5px;
    -webkit-box-shadow: -2px -3px 15px 5px #898989; 
    box-shadow: -2px -3px 15px 5px #898989;

    display: flex;
    flex-direction: column;
    align-items: center;

    .chart{
        width: 100%;
    }

    button{
        align-self: flex-start;
        border-top-left-radius: 5px;
        background-color: #ffffff;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            background-color: #404040;
            color: #ff9900;
        }
    }
`;

export const ClientInfo = styled.div`
    height: 45px;
    width: 170px;
    border-radius: 30px;
    background-color: #898989;
    color: purple;
    display: flex;
    align-items: center;
    border: 4px solid #898989;

    .iconClient{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: purple;
        color: #d8d8d8;
        border: 4px solid #ecebec;
        font-size: 2.5rem;
    }
    .nameClient{
        margin-left: 5px;
        color: #d8d8d8;
    }
`;