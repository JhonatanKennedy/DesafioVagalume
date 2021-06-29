import React, { useState } from 'react';
import { ModalContainer, Container,HideContainer } from './styles';
import { AiOutlineClose } from 'react-icons/ai';

export default function ErrorModal({ onClose }) {
    const [hide,setHide] = useState(false);

    function Close(){
        setHide(true);
        setTimeout(() => {
            onClose();
        }, 1000);
    }

    return(
        <ModalContainer>
            {!hide &&             
            <Container  onClick={() => {Close()}}>
                <button><AiOutlineClose size={20}/></button>
                <p>Username ou senha incorretos!</p>
            </Container>}
            {hide && 
            <HideContainer>
                <button><AiOutlineClose size={20}/></button>
                <p>Username ou senha incorretos!</p>
            </HideContainer>}
        </ModalContainer>

    );
}