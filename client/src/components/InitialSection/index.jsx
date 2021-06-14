import React from 'react';
import { GlobalStyle } from '../../styles/global.js';
import {
    InitialSectionContainer,
    InitialSectionTextContainer,
    InitialSectionImageContainer
} from './styles.js';

export default function InitialSection(){
    return(
        <InitialSectionContainer>
            <InitialSectionTextContainer>
                <p>texto</p>
            </InitialSectionTextContainer>

            <InitialSectionImageContainer>
                <p>ola</p>
            </InitialSectionImageContainer>
        </InitialSectionContainer>
    );
}
