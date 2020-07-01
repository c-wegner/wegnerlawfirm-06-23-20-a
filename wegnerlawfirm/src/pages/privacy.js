import React from "react";
import GlobalStyle from '../globals/layouts/globalstyle';
import { Master, Testing } from '../globals/layouts/master';
import Main from '../views/main';
import '../libaries/all.js';



export default () => (
    <React.Fragment>
        <Master
            Title='Naples Business Attorney | Wegner Law PLLC'
            Description='Wegner Law PLLC is the only law firm in Naples, Florida working exclusively with small to mid-sized businesses and entrepreneurs'
        >
            <GlobalStyle />
            <br />
            <br />
        This is the privacy page.
        </Master>
    </React.Fragment>
)