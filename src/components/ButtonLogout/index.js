import React from 'react';
import { LogOutContainer } from './style';
import { BiLogOut } from 'react-icons/bi';

export default function ButtonLogOut(){
    return(
        <LogOutContainer>
            <BiLogOut/>
        </LogOutContainer>
    );
}