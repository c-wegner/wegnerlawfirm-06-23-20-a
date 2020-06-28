import { createGlobalStyle } from 'styled-components';

const fontSize = '17px';
const lineHeight = 1.7;

const GlobalStyle = createGlobalStyle`
    :root{
        font-size:${fontSize};
    }
    
    
    html, body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 200;  
        padding:0;
        margin:0; 
        width: 100%;
        overflow-x: hidden;
    }


    *{
        box-sizing: border-box; 
        margin:0;
        padding:0;
    }


`;

export default GlobalStyle;