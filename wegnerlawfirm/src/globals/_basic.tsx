import React from 'react';
import styled from 'styled-components';

const Blah = styled.span `
    color: purple;
    font-size: 5rem;
`

export const TestingComponent:React.FC=()=>(
    <React.Fragment>
        <Blah>
            A
        </Blah>
    </React.Fragment>
)