import React, { useEffect } from 'react';
import styled from 'styled-components';
import {screenSize} from '../_constants';

export class Link{
    label:string;
    anchor:string;
    createMenuLink:boolean;
    ref:any;

    constructor(Label:string, Anchor:string, Ref:any, CreateLink=true){
        this.label  = Label;
        this.anchor = Anchor;
        this.createMenuLink = CreateLink;
        this.ref = Ref;
    }
}

interface IStylesLink{
    borderColor:string;
    color: string;
}

const Styles={
    Link:styled.li<IStylesLink> `
        text-align:left;
        font-size: 1.3rem;
        color: ${p=>p.color};
        display: block;
        
        @media(min-width: ${screenSize.md}){
            color: black;
            padding: 0 15px;
            border-bottom: 4px solid ${p=>p.borderColor};
            margin: 0 10px;
            font-size: 1.1rem;
            height: 2rem;
        }
    `,
}

interface IMenuLink{
    label:string;
    id:string;
    currentId:string;
    onClick:any;
}

export const MenuLink:React.FC<IMenuLink>=({
    label,
    id,
    currentId,
    onClick
})=>{
    useEffect(()=>{},[currentId]);
    function handleClick(){
        console.log('link')
       onClick(id);
    }
    return(
        <Styles.Link
            color={(currentId===id)?'red': 'black'}
            borderColor={(currentId===id)?'red': 'white'}
            onClick={()=>handleClick()}
        >
            {label}
        </Styles.Link>
    )
}