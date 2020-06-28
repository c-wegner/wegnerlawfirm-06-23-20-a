import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

interface IMaster{
    Title:string;
    Description:string;
    children:any;
}

const OverflowWrapper= styled.div `
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
`

export const Master:React.FC<IMaster>=({Title, Description, children})=>(
    <React.Fragment>
        <Metadata
            Title={Title}
            Description={Description}
        />
        <OverflowWrapper>
            {children}
        </OverflowWrapper>
    </React.Fragment>   
)

interface IMetadata{
    Title:string;
    Description:string;
}

export const Metadata: React.FC<IMetadata> = ({Title, Description}) => (
    <React.Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{Title}</title>
            <meta name="description" content={Description} />
            <link rel="canonical" href="https://wegnerlawfirm.com" />
        </Helmet>
    </React.Fragment>
)