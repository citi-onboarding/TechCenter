import react from 'react';
import {
    EventContainer,
    EventTopContainer,
    EventCarousel,
    EventCarouselContaier
} from './styles';
import CarouselItem from '../../CarouselItem';
import Slider from "react-slick";
import './testando.css';
import Arrow from '../../Arrow';

export default function Event() {

    const carouselSettings = {
        dots: true,
        inifite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <Arrow/>,
        prevArrow: <Arrow/>,
    }

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
                <Slider {...carouselSettings}>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Slider>
            </EventCarousel>

            </EventCarouselContaier>


        </EventContainer>

    );
}