import React, { useEffect, useState } from 'react';
import API from '../../../services/API';
import footerLogoTechCenter from '../../../assets/footerLogoTechCenter.svg';
import medium from '../../../assets/medium.svg';
import instagram from '../../../assets/instagram.svg';
import youtube from '../../../assets/youtube.svg'

import {
    FooterContainer,
    FooterContent,
    FooterSocialMedia
} from './styles';



export default function Footer() {

    const [text, setText] = useState('');

    async function getText() {
        await API.get('/first-text').then((response) => {
            const { Text } = response.data[0];
            setText(Text);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getText();
    }, [])

    return (

        <FooterContainer>

            <FooterContent>

                <img src={footerLogoTechCenter} alt="Footer Logo" />

                <div>
                    <p>
                        {text}
                    </p>
                </div>

                <FooterSocialMedia>
                    <div className="social">
                        <img src={instagram} alt="instagram" onClick={ () => {
                            window.location.href = "https://google.com.br"
                        }}/>
                        <img src={medium} alt="medium" />
                        <img src={youtube} alt="youtube" />
                    </div>

                    <div className="text">
                        <p>Made with &lt;/&gt; and &lt;3</p>
                    </div>
                </FooterSocialMedia>
            </FooterContent>
        </FooterContainer>
    );
}