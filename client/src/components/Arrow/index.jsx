import React from 'react';
import {
    ArrowContainer
} from './styles';

export default function Arrow ({className, style, onClick}){
    return(
        <ArrowContainer className={className} style={{
            ...style, background: "red"
        }} onClick= {onClick}>
        </ArrowContainer>
    );
}