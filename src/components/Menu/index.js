import React from 'react';
import Logo from '../../assets/logo.png';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiWifiFill } from 'react-icons/ri';
import { IoMdSettings, IoMdGlobe, IoMdBusiness, IoMdFilm } from 'react-icons/io';
import { IoGrid } from 'react-icons/io5';
import { AiFillEye, AiOutlineTablet } from 'react-icons/ai';
import { FaClipboardList } from 'react-icons/fa'
import { MenuContainer, LogoContainer, PhotoContainer, IconsContainer } from './styles';
import { IconContext } from 'react-icons/lib';


export default function Menu (){

    return(
        <MenuContainer>
            <LogoContainer>
                <img src={Logo} alt='logo'/>
            </LogoContainer>
            <IconsContainer className='icons'>
                <PhotoContainer>
                    J
                </PhotoContainer>
                <IconContext.Provider value={{size:'32px', className: 'icons'}} >
                    <IoMdBusiness />
                    <BsFillPeopleFill />
                    <IoMdSettings />
                    <AiFillEye />
                    <IoGrid/>
                    <IoMdGlobe/>
                    <FaClipboardList/>
                    <IoMdFilm/>
                    <AiOutlineTablet/>
                    <RiWifiFill/>
                </IconContext.Provider>
            </IconsContainer>
        </MenuContainer>
    );
}