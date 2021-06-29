import React from 'react';
import { ModalContainer, Container } from './styles';
import { AiOutlineClose } from 'react-icons/ai';

export default function ErrorModal({ onClose }) {
    return(
        <ModalContainer>            
            <Container  onClick={() => {onClose()}}>
                <button><AiOutlineClose size={20}/></button>
                <p>Username ou senha incorretos!</p>
            </Container>
        </ModalContainer>

    );
}