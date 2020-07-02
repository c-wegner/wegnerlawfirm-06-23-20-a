import React, {useEffect} from 'react';
import styled from 'styled-components';
import { screenSize } from '../_constants';

interface IStylesFace {
    display: string;
}

const Styles = {
    Button: styled.div`
    display: block;
    height: 35px;
    width: 35px;
    cursor: pointer;
    
    @media(min-width: ${screenSize.md}){
        display: none;
    `,

    Face: styled.div<IStylesFace> `
        display: ${p => p.display};
        font-size: 3rem;
    `,
}

interface IHamburger {
    expanded: boolean;
    onClick: any;
}

export const Hamburger: React.FC<IHamburger> = ({
    expanded,
    onClick
}) => {
    useEffect(()=>{}, [expanded]);
    return (
        <Styles.Button onClick={onClick}>
            <Styles.Face display={(expanded) ? 'block' : 'none'}>
                                <i className='fal fa-times'></i>
 
            </Styles.Face>
            <Styles.Face display={(expanded) ? 'none' : 'block'}>
               <i className='fal fa-bars'></i>
            </Styles.Face>
        </Styles.Button>
    )
}