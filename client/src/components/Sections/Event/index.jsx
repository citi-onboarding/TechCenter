import react from 'react';
import {
    EventContainer,
    EventTopContainer,
    EventCarousel
} from './styles';
import { CarouselItemContainer } from '../../CarouselItem/styles';

export default function Event() {
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




            <CarouselItemContainer>

            </CarouselItemContainer>


        </EventContainer>

    );
}