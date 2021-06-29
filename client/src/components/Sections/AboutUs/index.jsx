import {
    AboutUsContainer,
    TopAboutUsContainer,
    ValuesAboutUsContainer
} from './styles';
import React, { useEffect, useState } from 'react';

import API from '../../../services/API';
import deployment from '../../../assets/deployment.svg';
import deploymentMobile from '../../../assets/deployment-mobile.svg';
import diversity from '../../../assets/diversity.svg';
import diversityMobile from '../../../assets/mobile-diversity.svg';
import legos from '../../../assets/legos.svg';
import teaching from '../../../assets/teaching.svg';
import teachingMobile from '../../../assets/teaching-mobile.svg';

export default function AboutUs() {

    const [values, setValues] = useState([]);
    const images = [diversity, deployment, teaching];
    const imagesMobile = [diversityMobile, deploymentMobile, teachingMobile];
    const [upperText, setUpperText] = useState("")

    async function getValuesInformation() {
        await API.get('/aboutus').then((response) => {
            setValues(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    async function fetchUpperText() {
        await API.get('/upper-text').then((response) => {
            setUpperText(response.data[0].Text)
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getValuesInformation();
        fetchUpperText()
    }, [])

    return (
        <AboutUsContainer id="ABOUTUS">
            <TopAboutUsContainer>
                <img src={legos} alt="Legos Logo" />

                <div className="mid-top-about-us">
                    <p>{upperText}</p>
                </div>


                <div className="last-top-about-us">
                    <p className="title">Impactamos o</p>
                    <p>pensamento tech!</p>
                </div>
            </TopAboutUsContainer>

            <ValuesAboutUsContainer>
                {
                    values.map((value, index) => {
                        return (
                            <div key={index} className={index === 1 ? "mid-values" : ""} >
                                <img src={window.innerWidth <= 425 ? imagesMobile[index] : images[index]} alt="Icons" />

                                <p className="title">{value.Title}</p>

                                <p className="description">{value.Description}</p>
                            </div>
                        );
                    })
                }
            </ValuesAboutUsContainer>
        </AboutUsContainer>
    );
}