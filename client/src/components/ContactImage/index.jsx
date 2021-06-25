import React, { useEffect, useState } from 'react';


import {
    ContactImageContainer,
    ContactImageContent,
    ContactImageContentImage,
    ContactImageContentImageMobile,
    ContactImageContentMobile
} from './styles';

import API from '../../services/API';
import ImageContact from '../ImageContact';
import leftLego from '../../assets/leftLego.svg';
import legos from '../../assets/legosContact.svg';
import rightLego from '../../assets/rightLego.svg';


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


    if (window.innerWidth >= 425) {
        return (
            <ContactImageContainer>
                <ContactImageContent>
                    <img src={legos} alt="Left Legos" />

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
    } else {
        return (
            <ContactImageContainer>
                <ContactImageContentMobile>
                    <div className="left">
                        <img src={leftLego} alt="Legos" />
                    </div>


                    <ContactImageContentImageMobile>
                        {
                            images.map((image, index) => {
                                return (
                                    <ImageContact url={image.Image.url} key={index} />
                                );
                            })
                        }
                    </ContactImageContentImageMobile>

                    <div className="right">
                        <img src={rightLego} alt="right Legos" />
                    </div>
                </ContactImageContentMobile>
            </ContactImageContainer>
        );

    }


}