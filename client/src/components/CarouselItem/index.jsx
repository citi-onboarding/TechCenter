import React from 'react';
import {
    CarouselItemContainer,
    CarouselItemContainerImage,
    CarouselItemContainerInformation
} from './styles.js';
import baby from '../../assets/baby.jpeg';

export default function CarouselItem() {
    return (
        <CarouselItemContainer>

            <CarouselItemContainerImage>
                <img src="https://s2.glbimg.com/QqEDyJyWVPTI9tU-5izKpJls6UE=/620x520/smart/e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg" alt="Event" />
            </CarouselItemContainerImage>


            <CarouselItemContainerInformation>
                <p className="title">Insights Center</p>
                <p className="description">Evento para EJ’s de todo o Brasil</p>
                <p className="date">18 de Agosto às 15h </p>
            </CarouselItemContainerInformation>

        </CarouselItemContainer>
    );
}