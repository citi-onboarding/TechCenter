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
                    <CarouselItem image="https://i.pinimg.com/originals/1e/06/e1/1e06e107f0ca520aed316957b685ef5c.jpg"/>
                    <CarouselItem image="https://i.pinimg.com/originals/de/f6/96/def69643889ee29e232637646e839064.jpg"/>
                    <CarouselItem image="https://portalfotografianapratica.com/wp-content/uploads/2019/09/miniatura-01-730x410.jpg"/>
                    <CarouselItem image="https://s1.1zoom.me/big0/703/Planets_Trees_Night_576489_1280x800.jpg"/>
                    <CarouselItem image="https://img.freepik.com/fotos-gratis/muitos-baloes-coloridos-no-ceu-azul-conceito-de-amor-no-verao-e-namorados-lua-de-mel-de-casamento-imagens-de-estilo-de-efeito-vintage_1253-1119.jpg?size=338&ext=jpg&ga=GA1.1.1243305198.1623196800"/>
                </Slider>
            </EventCarousel>

            </EventCarouselContaier>


        </EventContainer>

    );
}