import React from "react";
import GlobalStyle from '../globals/layouts/globalstyle';
import { Master } from '../globals/layouts/master';

import Spy from '../components/tools/spy'


export default () => (
    <React.Fragment>
        <Master
            Title='Naples Business Attorney | Wegner Law PLLC'
            Description='Wegner Law PLLC is the only law firm in Naples, Florida working exclusively with small to mid-sized businesses and entrepreneurs'
        >
            <GlobalStyle />

        </Master>
    </React.Fragment>
)
