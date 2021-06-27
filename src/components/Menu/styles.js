import styled from 'styled-components';

export const MenuContainer = styled.div`
    position: absolute;
    background-color: #404040;
    height: 100vh;
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-height: 768px){
        height: 75vh;
    }
`;

export const LogoContainer = styled.div`
    background-color: #1b1b1b;
    height:55px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 45px;
        height: 40px;
    }
`;
export const IconsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .icons{
        cursor: pointer;
        color:#fdfdfd;
        &:hover{
            color: #ff9900;
        }
    }
`;
export const PhotoContainer = styled.div`
    background-color: #D77000;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: #1b1b1b;
`;