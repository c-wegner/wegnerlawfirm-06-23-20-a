import React, { useEffect } from 'react';
import styled from 'styled-components';
import { screenSize } from '../_constants';

interface IStylesMenu {
    height: string;
}

const Styles = {
    Menu: styled.ul<IStylesMenu>`
        display: flex;
        flex-direction: column;
        height: ${p => p.height};
        transition: height .25s;
        overflow: hidden;

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
}

export const Menu: React.FC<IMenu> = ({
    expanded,
    children
}) => {
    return (
        <React.Fragment>

            <Styles.Menu height={(expanded) ? '100vh' : '0'}>
                {children}
            </Styles.Menu>
        </React.Fragment>
    )
}