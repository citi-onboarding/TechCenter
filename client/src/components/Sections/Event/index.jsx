import react, { useEffect } from 'react';
import Slider from "react-slick";
import './changeCarousel.css';
import CarouselItem from '../../EventCarouselItem';
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

export default function Event() {

    async function getEvents(){
        await API.get('/events').then((response) => {
            console.log(response.data[0]);
            const {Image,Link,Date,Tile, Description,} = response.data[0];
            console.log(Image[0]);
            const {url} = Image[0];
            console.log(url);
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