import React from 'react';
import {
    ButtonContainer
} from "./styles.js";

export default function ButtonTechCenter({className, description}){
    return(
        <ButtonContainer>
            <button className = {className}>{ description}</button>
        </ButtonContainer>
    );    
}