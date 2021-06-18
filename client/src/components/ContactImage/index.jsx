import React from 'react';


import {
    ContactImageContainer,
    ContactImageContentImage,
    ContactImageContent
} from './styles';

import legos from '../../assets/legosContact.svg';
import ImageContact from '../ImageContact';

export default function ContactImage() {
    return (

        <ContactImageContainer>
            <ContactImageContent>
                <img src={legos} alt="Legos" />

                <ContactImageContentImage>
                    <ImageContact url="https://s2.glbimg.com/QqEDyJyWVPTI9tU-5izKpJls6UE=/620x520/smart/e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg" />
                    <ImageContact url="https://s2.glbimg.com/QqEDyJyWVPTI9tU-5izKpJls6UE=/620x520/smart/e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg" />
                </ContactImageContentImage>
            </ContactImageContent>
        </ContactImageContainer>


    );
}