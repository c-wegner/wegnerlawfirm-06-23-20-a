import React, { useEffect } from 'react';
import styled from 'styled-components';
import { screenSize } from '../_constants';
import {Hamburger} from './hamburger';

interface IStylesMenu {
    height: string;
}

const Styles = {
    ResponsiveMenu: styled.div`
        display: flex;
        flex-direction: column;


        @media(min-width: ${screenSize.md}){
            flex-direction: row;
        }
    `,

    BurgerWrapper:styled.div `
        height: 55px;
        background-color: blue;
        width: 100%;
    `,

    Menu: styled.ul<IStylesMenu>`
        display: flex;
        flex-direction: column;
        height: ${p => p.height};
        transition: height .25s;
        overflow: hidden;
        width:100%;

        background-color: red;

        @media(min-width: ${screenSize.md}){

            flex-direction: row;
            margin: 10px;
            height: 45px;
        }
    `,
}

interface IMenu {
    expanded: boolean;
    children: any;
    onBurgerClick:any;
}

export const Menu: React.FC<IMenu> = ({
    expanded,
    children,
    onBurgerClick,
}) => {
    return (
        <React.Fragment>
            <Styles.ResponsiveMenu>
 <Styles.BurgerWrapper>
                    <Hamburger
                    expanded={expanded}
                    onClick={onBurgerClick}
                />
 </Styles.BurgerWrapper>
                <Styles.Menu height={(expanded) ? '100vh' : '0'}>
                    {children}
                </Styles.Menu>
            </Styles.ResponsiveMenu>
        </React.Fragment>
    )
}