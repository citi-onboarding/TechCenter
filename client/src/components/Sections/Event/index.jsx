import './changeCarousel.css';

import {
    EventCarousel,
    EventCarouselContaier,
    EventContainer,
    EventTopContainer
} from './styles';
import react, { useEffect, useState } from 'react';

import API from '../../../services/API';
import {
    CarouselSettings
} from './CarouselSettings.js';
import { ConvertDateTime } from './ConvertDateTime';
import EventCarouselItem from '../../EventCarouselItem';
import Slider from "react-slick";

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
    }, [])

    return (

        <EventContainer id="EVENTOS">

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
                <Slider {...CarouselSettings}>
                    {
                        events.map((event,index) => {
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