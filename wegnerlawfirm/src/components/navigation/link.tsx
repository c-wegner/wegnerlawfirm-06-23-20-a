import React from 'react';
import styled from 'styled-components';
import {screenSize} from '../_constants';

export class Link{
    label:string;
    anchor:string;
    ref:any;

    constructor(Label:string, Anchor:string, Ref:any){
        this.label  = Label;
        this.anchor = Anchor;
        this.ref = Ref;
    }
}

