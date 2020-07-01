import React, {useState} from 'react';
import styled from 'styled-components';
import {screenSize} from '../_constants';
import {Menu} from './menu';
import {MenuLink, Link} from './link';

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
    background-color: white;

`;

interface INavbar{
    currentId:string;
    onNavigation: any;
    options: Link[];
}

export const Navbar:React.FC<INavbar>=({currentId, onNavigation, options})=>{
    const [expandedMenu, setExpandedMenu] = useState(false);

    function handleClick(id:string){
        onNavigation(id);
    }

    return(
        <Nav>
            <Logo src={Signature} alt='Wegner Law PLLC business law firm signature logo' onClick={()=>handleClick('home')} />
            <Menu expanded={expandedMenu} onBurgerClick={()=>setExpandedMenu(!expandedMenu)}>
                {
                    options.map((x:Link, i)=>{
                        if(x.createMenuLink){
                            return(
                                <MenuLink
                                    label={x.label}
                                    id={x.anchor}
                                    currentId={currentId}
                                    onClick={()=>handleClick(x.anchor)}
                                    key={x.anchor +'_' + i.toString()}
                                />
                            )
                        }
                    })
                }
            </Menu>
        </Nav>
    )
}