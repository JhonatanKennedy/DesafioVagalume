import React, { useState } from 'react';
import { LogOutContainer } from './style';
import { BiLogOut } from 'react-icons/bi';
import Modal from '../Modal/index';

export default function ButtonLogOut(){
    const [show,setShow] = useState(false);

    return(
        <>
        <LogOutContainer onClick={() => setShow(true)}>
            <BiLogOut/>
        </LogOutContainer>
        {show ? <Modal onClose={() => setShow(false)}/> : null}
        </>
    );
}