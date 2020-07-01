import React, {useState} from 'react';
import styled from 'styled-components';
import {screenSize} from '../_constants';
import {Menu} from './menu';
import {MenuLink} from './link';

//@ts-ignore
import Signature from '../../imgs/wegner-law-signature-logo.jpg';

const Logo = styled.img `
    margin: 5px;
    height: 55px;
    cursor: pointer;
`;

const Nav = styled.div `
    display: flex;
    justify-content: space-between;
      position: fixed;
  top: 0;
  width: 100%;

`;



interface INavbar{
    currentId:string;
    onNavigation: any;
}

export const Navbar:React.FC<INavbar>=({currentId, onNavigation})=>{
    const [expandedMenu, setExpandedMenu] = useState(true);

    function handleClick(id:string){
        console.log(id +'Navbar')
        onNavigation(id);
    }

    return(
        <Nav>
            <Logo src={Signature} alt='Wegner Law PLLC business law firm signature logo' onClick={()=>handleClick('home')} />
            <Menu expanded={expandedMenu}>
                <MenuLink
                    label='About'
                    id='about'
                    currentId={currentId}
                    onClick={()=>handleClick('about')}
                />
            </Menu>
        </Nav>
    )
}