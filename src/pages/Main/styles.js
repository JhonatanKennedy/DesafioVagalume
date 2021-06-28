import styled, { keyframes } from 'styled-components';
import Background from '../../assets/background.jpg';

const appearFromRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(30px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;
    animation: ${appearFromRight} 1s;
`;

export const MainPage = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 1.6rem;
`;

export const BackgroundMenu = styled.div`
    background-color: #404040;
    height: 100vh;
    width: 70px;
`;

export const TableContainer = styled.div`
    background: #ffffff;
    margin-right: 2.4vw;
    height: 90vh;
    width: 90vw;

    border-radius: 5px;
    -webkit-box-shadow: -2px -3px 15px 5px #898989; 
    box-shadow: -2px -3px 15px 5px #898989;
    display: flex;
    align-self: center;
`;

export const HalfTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;

    h2{
        padding: 15px;
    }
`;
export const TableClients = styled.div`
    height: 90%;
    width: 100%;
    ul{
        list-style-type: none;
    }
    li{
        border-bottom: 1px solid #808080 ;
        padding: 15px;
    }
    a{
        text-decoration: none;
        color: black;
    }
    .clients{
        border-right: 1px solid #9fa0a1;
        border-bottom: 1px solid #9fa0a1 ;
        &:hover{
            background-color: #404040;
            color: #ff9900;
        }
    }
    .reverse{
        cursor: pointer;
        padding: 15px 15px 15px 0px;
    }
`;
export const BlankSpace = styled.div`
    width: 50%;
`;