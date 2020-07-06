import React from 'react';
import styled from 'styled-components';
import * as constants from '../_constants';

interface IStylesContainer{
    displaceX:string;
    opacity: number;
}

const Styles = {
    Container:styled.div<IStylesContainer> `
        opacity: ${p=>p.opacity};
        transition: transform 2s, opacity 3s;
        width: 100%;
        background-color: white;
        padding: 10px;
    @media(min-width:${constants.screenSize.md}){
        position: relative;
        width: 450px;
        transform: translate(${p=>p.displaceX});
        margin-right: 300px;
        margin-top: -350px;
        border: 1px solid #222;
    }
    `,
    
    Attorney: styled.h2 `

    `
    ,

    Content: styled.p `
    
    `
}

interface IBio{
    displaceX:string;
    opacity:number;
}

export const Bio:React.FC<IBio>=({displaceX, opacity})=>{

    return(
        <Styles.Container
            displaceX={displaceX}
            opacity={opacity}
        >
            <Styles.Attorney>
                P. Christopher Wegner
            </Styles.Attorney>
            <Styles.Content>
                P. Christopher ("Chris") Wegner, Managing Attorney, Wegner Law PLLC, is a serial entreprenour.
            </Styles.Content>
        </Styles.Container>
    )
}