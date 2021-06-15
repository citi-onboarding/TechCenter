import react from 'react';
import {
    EventContainer,
    EventTopContainer,
    EventCarousel,
    EventCarrouselContaier
} from './styles';
import CarouselItem from '../../CarouselItem';
import Slider from "react-slick";

export default function Event() {

    const carouselSettings = {
        dots: true,
        inifite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
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

            <EventCarrouselContaier>

            <EventCarousel>
                <Slider {...carouselSettings}>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Slider>
            </EventCarousel>

            </EventCarrouselContaier>


        </EventContainer>

    );
}