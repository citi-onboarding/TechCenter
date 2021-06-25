import {
    ContactImageContainer,
    ContactImageContent,
    ContactImageContentImage
} from './styles';
import React, { useEffect, useState } from 'react';

import API from '../../services/API';
import ImageContact from '../ImageContact';
import legos from '../../assets/legosContact.svg';

export default function ContactImage() {

    const [images, setImages] = useState([]);


    async function getImages() {
        await API.get('/contact-image').then((response) => {
            let amountOfImages = []
            response.data.forEach((image) => {
                image.Image = image.Image[0]
                amountOfImages.push(image);
            })
            setImages(amountOfImages);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getImages();
    }, [])

    return (

        <ContactImageContainer>
            <ContactImageContent>
                <img src={legos} alt="Legos" />

                <ContactImageContentImage>
                    {
                        images.map((image, index) => {
                            return (
                                <ImageContact url={image.Image.url} key={index} />
                            );
                        })
                    }
                </ContactImageContentImage>
            </ContactImageContent>
        </ContactImageContainer>


    );
}