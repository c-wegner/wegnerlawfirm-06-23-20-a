import React from 'react';
import styled from 'styled-components';
import * as constants from '../_constants';


//@ts-ignore
import Photo from '../../imgs/attorneys/wegner-about-alt.jpg';

interface IStylesContainer{
    displaceX:string;
    opacity: number;
}

const Styles = {
    Container:styled.img<IStylesContainer> `
        opacity: ${p=>p.opacity};
        transition: transform 2s, opacity 3s;
        width: 100%;
    @media(min-width:${constants.screenSize.md}){
        position: relative;
        width: 450px;
        transform: translate(${p=>p.displaceX});
        margin-left:225px;
        margin-bottom: 100px;
    }
    `,
}

interface IPicture{
    displaceX:string;
    opacity:number;
}

export const Picture:React.FC<IPicture>=({displaceX, opacity})=>{
    return(
        <Styles.Container
            src={Photo}
            alt='Naples business attorney P. Christopher Wegner of Wegner Law PLLC'
            displaceX={displaceX}
            opacity={opacity}
        />
    )
}