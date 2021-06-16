import react, { useEffect, useState } from 'react';
import Slider from "react-slick";
import './changeCarousel.css';
import EventCarouselItem from '../../EventCarouselItem';
import API from '../../../services/API';
import {
    EventContainer,
    EventTopContainer,
    EventCarousel,
    EventCarouselContaier
} from './styles';

import {
    mainCarouselSettings
} from './CarouselSettings.js';

import { ConvertDateTime } from './ConvertDateTime';

export default function Event() {

    const [events, setEvents ]= useState([]);

    async function getEvents(){
        await API.get('/events').then((response) => {
            let amountOfEvents = [];
            response.data.forEach((event) => {
                event.Image = event.Image[0];
                event.Date = ConvertDateTime(event.Date);
                amountOfEvents.push(event);
            })
            setEvents(amountOfEvents);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getEvents();
    },[])

    return (

        <EventContainer>

            <EventTopContainer>

                <div className="hightlight-box">
                    <p className="title">Eventos</p>
                    <p>Tech Center</p>
                </div>

                <div>
                    <p className="description">
                        Somos uma comunidade e nos reunimos em momentos de construção conjunta, trocando conhecimento e transformando juntos!
                    </p>
                </div>

            </EventTopContainer>

            <EventCarouselContaier>

            <EventCarousel>
                <Slider {...mainCarouselSettings}>
                    {
                        events.map((event,index) => {
                            console.log(event)
                            return (
                                <EventCarouselItem
                                    key={index}
                                    event = {event}
                                />
                            );
                        })
                    }
                </Slider>
            </EventCarousel>

            </EventCarouselContaier>


        </EventContainer>

    );
}