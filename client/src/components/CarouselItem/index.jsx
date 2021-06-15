import React from 'react';
import {
    CarouselItemContainer,
    CarouselItemContainerImage,
    CarouselItemContainerInformation
} from './styles.js';

export default function CarouselItem() {
    return (
        <CarouselItemContainer>

            <CarouselItemContainerImage/>

            <CarouselItemContainerInformation>
                <p className="title">Insights Center</p>
                <p className="description">Evento para EJ’s de todo o Brasil</p>
                <p className="date">18 de Agosto às 15h </p>
            </CarouselItemContainerInformation>

        </CarouselItemContainer>
    );
}