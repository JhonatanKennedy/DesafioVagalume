import React,{ useEffect } from 'react';
import { ModalContainer, Container } from './styles';
import { AiOutlineClose } from 'react-icons/ai';

export default function ErrorModal({ onClose }) {
    useEffect(() => {
        const wait = setTimeout(() => {
            onClose();
        }, 4000);
        return () => clearTimeout(wait);
    },[onClose]);

    return(
        <ModalContainer>            
            <Container  onClick={() => {onClose()}}>
                <button><AiOutlineClose size={20}/></button>
                <p>Username ou senha incorretos!</p>
            </Container>
        </ModalContainer>
    );
}