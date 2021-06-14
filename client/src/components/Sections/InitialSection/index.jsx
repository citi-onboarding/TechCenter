import React from 'react'; 
import {
    InitialSectionContainer,
    InitialSectionTextContainer,
    InitialSectionImageContainer
} from './styles.js';
import logoTechCenter from '../../../assets/logoTechCenter.svg';
import ButtonTechCenter from '../../Button/index.jsx';

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

                <ButtonTechCenter className="join-to-community" description="Entrar na comunidade"/>
            </InitialSectionTextContainer>

            <InitialSectionImageContainer>
                <img src={logoTechCenter} alt="Logo TechCenter" />
            </InitialSectionImageContainer>
        </InitialSectionContainer>
    );
}
