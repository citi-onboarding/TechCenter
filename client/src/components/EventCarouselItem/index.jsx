import React from 'react';
import {
    EventCarouselItemContainer,
    EventCarouselItemContainerImage,
    EventCarouselItemContainerInformation,
    EventCarouselItemButton
} from './styles.js';

import {
    DoubleRightOutlined
} from '@ant-design/icons'

export default function CarouselItem({image}) {
    return (
        <EventCarouselItemContainer>

            <EventCarouselItemContainerImage url={image}/>

            <EventCarouselItemContainerInformation>
                <p className="title">Insights Center</p>
                <p className="description">Evento para EJ’s de todo o Brasil</p>
                <p className="date">18 de Agosto às 15h </p>
            </EventCarouselItemContainerInformation>

            <EventCarouselItemButton>
                <div>
                    <DoubleRightOutlined className="button" style={{
                        color: "var(--BLACK)"
                    }}/>
                </div>
            </EventCarouselItemButton>



        </EventCarouselItemContainer>
    );
}