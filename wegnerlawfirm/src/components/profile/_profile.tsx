import React, { useState } from 'react';
import styled from 'styled-components';
import * as constants from '../_constants';
import Spy from '../tools/spy';

import { Picture } from './photo';
import { Bio } from './profile';

const Styles = {
    Strip: styled.div`
        display: flex;
        flex-direction: column-reverse;

        @media(min-width: ${constants.screenSize.md}){
            flex-direction: column;
            align-content: center;
            padding-bottom: 300px;
        }
    `,

    Stack: styled.div`
        display: flex;
        justify-content: center;
    `,

    Spacer: styled.div `

        display: none;
       @media(min-width: ${constants.screenSize.md}){
           height: 300px;
           display: block;
       }
    `,
}

export const Profile = () => {
    const [inView, setInview] = useState(false);

    function getOpacity() {
        return (inView) ? 1 : 0;
    }

    function getDisplacement(forPicture = true) {
        if (forPicture) {
            return (inView) ? '0' : '350px';
        } else {
            return (inView) ? '0' : '-350px';
        }
    }
    return (
        <Spy
            onVisible={() => setInview(true)}
        >
            <Styles.Strip>
                                <Styles.Stack>
                    <Picture
                        opacity={getOpacity()}
                        displaceX={getDisplacement()}
                    />
                </Styles.Stack>
                <Styles.Stack>
                    <Bio
                        opacity={getOpacity()}
                        displaceX={getDisplacement(false)}
                    />
                </Styles.Stack>

            <Styles.Spacer></Styles.Spacer>
            </Styles.Strip>

        </Spy>
    )
}