import React, { useEffect, useState } from 'react';
import API from '../../../services/API';
import footerLogoTechCenter from '../../../assets/footerLogoTechCenter.svg';
import mediumImage from '../../../assets/medium.svg';
import instagramImage from '../../../assets/instagram.svg';
import youtubeImage from '../../../assets/youtube.svg';
import citi from '../../../assets/citi.svg';

import {
    FooterContainer,
    FooterContent,
    FooterSocialMedia
} from './styles';



export default function Footer() {

    const [text, setText] = useState('');
    const [instagram, setInstragram] = useState('');
    const [medium, setMedium] = useState('');
    const [youtube, setYoutube] = useState('');



    async function getText() {
        await API.get('/first-text').then((response) => {
            const { Text } = response.data[0];
            setText(Text);
        }).catch((error) => {
            console.log(error);
        })
    }

    async function getSocialMediaLinks(){
        await API.get('/socialmedias').then((response) => {
            const {Medium, Instagram, Youtube } = response.data[0];
            setMedium(Medium); setInstragram(Instagram);
            setYoutube(Youtube);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getText();
        getSocialMediaLinks()
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
                        <img src={instagramImage} alt="instagram" onClick={ () => {
                            window.open(instagram)
                        }}/>
                        <img src={mediumImage} alt="medium" onClick={ () => {
                            window.open(medium)
                        }}/>
                        <img src={youtubeImage} alt="youtube" onClick= { () => {
                            window.open(youtube);
                        }} />
                    </div>

                    <div className="text">
                        <p>Made with &lt;/&gt; and &hearts; by </p>
                        <img src={citi} alt="citi logo" />
                    </div>
                </FooterSocialMedia>
            </FooterContent>
        </FooterContainer>
    );
}