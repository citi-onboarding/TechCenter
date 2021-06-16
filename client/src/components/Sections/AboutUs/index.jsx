import React, { useEffect, useState } from 'react';
import {
    AboutUsContainer,
    TopAboutUsContainer,
    ValuesAboutUsContainer
} from './styles';

import legos from '../../../assets/legos.svg';
import diversity from '../../../assets/diversity.svg';
import teaching from '../../../assets/teaching.svg';
import deployment from '../../../assets/deployment.svg';
import API from '../../../services/API';

export default function AboutUs() {

    const  [firstValue, setFirstValue] = useState([]);
    const  [secondValue, setSecondValue] = useState([]);
    const  [thirdValue, setThirdValue] = useState([]);


    async function getValuesInformation(){
        API.get('/aboutus').then((response)=> {
            const values = response.data;
            setFirstValue(values[0]);
            setSecondValue(values[1]);
            setThirdValue(values[2]);
        }).catch((error)=> {
            console.log(error);
        })
    }

    useEffect(()=>{
        getValuesInformation()
    }, [])

    return (
        <AboutUsContainer>
            <TopAboutUsContainer>
                <img src={legos} alt="Legos Logo" />

                <div className="mid-top-about-us">
                    <p>upsdoasjdalshdasjkasdasdasdasdasdadsalddjkashdkjashdkjsahdkjashdkjashdjkashdkjashdjkashdjkashdjkashdjkashdjkasdhjksahhakjsdhaksjdhnasadasd</p>
                </div>


                <div className="last-top-about-us">
                    <p className="title">Impactamos o</p>
                    <p>pensamento tech!</p>
                </div>


            </TopAboutUsContainer>

            <ValuesAboutUsContainer>

                <div>
                    <img src={diversity} alt="Diversity Icon" />

                    <p className="title">{firstValue.Title}</p>

                    <p className="description">{firstValue.Description}</p>
                </div>

                <div className="mid-values">
                    <img src={deployment} alt="" />

                    <p className="title">{secondValue.Title}</p>

                    <p className="description">{secondValue.Description}</p>

                </div>

                <div>
                    <img src={teaching} alt="Teaching Icon" />

                    <p className="title">{thirdValue.Title}</p>

                    <p className="description">{secondValue.Description}</p>

                </div>

            </ValuesAboutUsContainer>
        </AboutUsContainer>

    );
}