import React, {useState} from 'react';
import styled from 'styled-components';
import {screenSize} from '../_constants';
import {Menu} from './menu';
import {MenuLink, Link} from './link';

//@ts-ignore
import Signature from '../../imgs/wegner-law-signature-logo.jpg';

interface ILogo{
    display: string;
}

const Logo = styled.img<ILogo> `
    margin: 5px;
    height: 55px;
    cursor: pointer;
    display: ${p=>p.display};
`;

const Nav = styled.div `
    display: flex;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;

    @media(min-width: ${screenSize.md}){
     justify-content: space-between;      
    }

`;

interface INavbar{
    currentId:string;
    onNavigation: any;
    options: Link[];
}

export const Navbar:React.FC<INavbar>=({currentId, onNavigation, options})=>{
    const [expandedMenu, setExpandedMenu] = useState(false);

    function handleClick(id:string){
        setExpandedMenu(false);
        onNavigation(id);
    }

    return(
        <Nav>
            <Logo src={Signature} alt='Wegner Law PLLC business law firm signature logo' onClick={()=>handleClick('home')} display={(expandedMenu)? 'none':'block'} />
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