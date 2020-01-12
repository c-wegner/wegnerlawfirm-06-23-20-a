import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import './master.css';

interface IMaster{
    Title:string;
    Description:string;
    children:any;
}

export const Master:React.FC<IMaster>=({Title, Description, children})=>(
    <React.Fragment>
        <Metadata
            Title={Title}
            Description={Description}
        />
        <div className="website-overflow-wrapper">
            {children}
        </div>
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