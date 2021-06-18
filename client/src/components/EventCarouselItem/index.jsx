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

export default function EventCarouselItem({event}) {
    return (
        <EventCarouselItemContainer>
            <EventCarouselItemContainerImage url={event.Image.url}/>

            <EventCarouselItemContainerInformation>
                <p className="title">{event.Title}</p>
                <p className="description">{event.Description}</p>
                <p className="date">{event.Date}</p>
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