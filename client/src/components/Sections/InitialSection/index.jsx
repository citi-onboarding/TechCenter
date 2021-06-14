import React from 'react'; 
import {
    InitialSectionContainer,
    InitialSectionTextContainer,
    InitialSectionImageContainer
} from './styles.js';
import logoTechCenter from '../../assets/logoTechCenter.svg';

export default function InitialSection(){
    return(
        <InitialSectionContainer>
            <InitialSectionTextContainer>
                <p className= "title">
                    Onde tudo se conceta e você evolui
                </p>
                <p className="description">
                    "Potencializamos a transformação tecnológica através
                    da conexão e integração entre as pessoas, co-criando um ambiente
                    igualitário e inclusivo."
                </p>

                <Button type = "primary">Entrar na comunidade</Button>

            </InitialSectionTextContainer>

            <InitialSectionImageContainer>
                <img src={logoTechCenter} alt="Logo TechCenter" />
            </InitialSectionImageContainer>
        </InitialSectionContainer>
    );
}
