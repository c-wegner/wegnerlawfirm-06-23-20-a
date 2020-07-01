import React from 'react';
import styled from 'styled-components';
import * as constants from '../_constants';


//@ts-ignore
import Small from '../../imgs/heros/wegner-sm-hero-alt.jpg';

//@ts-ignore
import Large from '../../imgs/heros/wegner-lg-hero.jpg';

class Styles {
    static wallpaper = styled.div`
        display: flex;
        flex-direction: column;
        background-image: linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${Small});
        min-height: 775px;
        background-attachment: scroll;
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        overflow-x: hidden;
        margin:0;
  
    @media(min-width:${constants.screenSize.sm}){
        flex-direction: reverse-row;
        background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,.1), rgba(0,0,0,.4), rgba(0,0,0,.8), rgba(0,0,0,.9), rgba(0,0,0,1)), url(${Large});
        background-size: cover;
        background-attachment: fixed;
        min-height: 100vh;
    }
    `
}

export const Background:React.FC=()=>(
    <Styles.wallpaper>

    </Styles.wallpaper>
)