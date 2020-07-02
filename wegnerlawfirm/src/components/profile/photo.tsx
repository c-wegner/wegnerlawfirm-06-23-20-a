import React from 'react';
import styled from 'styled-components';
import * as constants from '../_constants';

//@ts-ignore
import Picture from '../../imgs/attorneys/wegner-about-alt.jpg';

interface IStylesContainer{
    displaceX:string;
    opacity: number;
}

const Styles = {
    Container:styled.img<IStylesContainer> `
        opacity: ${p=>p.opacity};
        transition: transform 2s, opacity 2s;
        width: 100%;
    @media(min-width:${constants.screenSize.md}){
        width: 550px;
        transform: translate(${p=>p.displaceX});
    }
    `,
}