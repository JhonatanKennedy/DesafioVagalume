import React from 'react';
import { ModalContainer, Container, InfoArea, CloseButton, ButtonArea, ButtonYes, ButtonNo } from './styles';
import { AiOutlineClose } from 'react-icons/ai';


export default function Modal({onClose = () => {}}){

    function handleClickOutside(e){
        if(e.target.id === 'modal'){
            onClose();
        }
    }
    function logOut(){
        localStorage.removeItem('@Vagalume:token');
        window.location.reload();
    }

    return(
        <ModalContainer onClick={handleClickOutside} id='modal'>
            <Container>
                <CloseButton onClick={onClose}>
                    <AiOutlineClose size={30}/>
                </CloseButton>
                <InfoArea>
                    <p>Tem certeza que deseja sair ?</p>
                    <ButtonArea>
                        <ButtonYes onClick={logOut}>Sair</ButtonYes>
                        <ButtonNo onClick={onClose}>Voltar</ButtonNo>
                    </ButtonArea>
                </InfoArea>
            </Container>
        </ModalContainer>

    );
}