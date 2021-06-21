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
    mainCarouselSettings,
    mobileCarouselSettings
} from './CarouselSettings.js';

import { ConvertDateTime } from './ConvertDateTime';

export default function Event() {

    const [events, setEvents ]= useState([]);
    const [carousel, setCarousel] = useState({});


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

    function handleResize() {
        console.log(window.innerWidth);
        if(window.innerWidth <= 425){
            setCarousel(mobileCarouselSettings);
        } else {
            setCarousel(mainCarouselSettings);
        }
    }

    useEffect(() => {
        getEvents();
        handleResize();
    }, [])

    window.addEventListener('resize', handleResize)

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
                <Slider {...carousel }>
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