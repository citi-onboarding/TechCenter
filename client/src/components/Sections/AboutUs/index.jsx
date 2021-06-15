import React from 'react';
import {
    AboutUsContainer,
    TopAboutUsContainer,
    ValuesAboutUsContainer
} from './styles';

import legos from '../../../assets/legos.svg';
import diversity from '../../../assets/diversity.svg';

export default function AboutUs() {

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
                    <img src={diversity} alt="" />

                    <p className="title">Diversidade</p>

                    <p className="description">asdljasldjaskldjaskldjaklsdjalskdjaklsdjaklsdjakldja</p>
                </div>

                <div className="mid-values">
                    <img src={diversity} alt="" />

                    <p className="title">Diversidade</p>

                    <p className="description">asdljasldjaskldjaskldjaklsdjalskdjaklsdjaklsdjakldja</p>

                </div>

                <div>
                    <img src={diversity} alt="" />

                    <p className="title">Diversidade</p>

                    <p className="description">asdljasldjaskldjaskldjaklsdjalskdjaklsdjaklsdjakldja</p>

                </div>

            </ValuesAboutUsContainer>
        </AboutUsContainer>

    );
}