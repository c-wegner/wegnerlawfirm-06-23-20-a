import React from 'react';
import styled from 'styled-components';
import {screenSize} from '../_constants';

//@ts-ignore
import Signature from '../../imgs/wegner-law-signature-logo.jpg';

const Logo = styled.img `
    margin: 5px;
    height: 55px;
`;

const Nav = styled.div `
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;

const Menu = styled.ul `
`;

interface INavbar{
    onNavigation: any;
}

export const Navbar:React.FC<INavbar>=({onNavigation})=>{
    return(
        <Nav>
            <Logo src={Signature} alt='Wegner Law PLLC business law firm signature logo' onClick={onNavigation} />
            <Menu></Menu>
        </Nav>
    )
}