import {
    InitialSectionContainer,
    InitialSectionImageContainer,
    InitialSectionTextContainer
} from './styles.js';
import React, { useEffect, useState } from 'react';

import API from '../../../services/API';
import ButtonTechCenter from '../../Button/index.jsx';
import MobileNavbar from '../../MobileNavbar/index.jsx';
import Navbar from '../../Navbar/index.jsx';
import logoTechCenter from '../../../assets/logoTechCenter.svg';

export default function InitialSection() {

    const [description, setDescription] = useState('');


    async function getDescription() {
        await API.get('/first-text').then((response) => {
            const { Text } = response.data[0];
            setDescription(Text);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getDescription()
    }, [])

    return (
        <React.Fragment>
            <MobileNavbar />
            <InitialSectionContainer>
                <InitialSectionTextContainer>
                    <p className="title">
                        Onde tudo se conceta e você evolui
                    </p>
                    <p className="description"> {description}
                    </p>

                    <ButtonTechCenter className="join-to-community" description="Entrar na comunidade" />
                </InitialSectionTextContainer>

                <InitialSectionImageContainer>
                    <img src={logoTechCenter} alt="Logo TechCenter" />
                </InitialSectionImageContainer>
            </InitialSectionContainer>
            <Navbar />
        </React.Fragment>
    );
}
