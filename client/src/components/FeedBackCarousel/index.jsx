import "./styles.css"

import { ButtonWrapper, Container } from "./styles.js";
import React, { useEffect, useState } from 'react'

import API from "../../services/API";
import FeedBackCard from '../FeedBackCard';
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export default function FeedBackCarousel() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            API.get("/feedbacks").then(
                res => setFeedbacks(res.data)
            ).catch(e => console.log(e))
        }
        fetchData();
    }, [])


    const hiddenClick = function (id) {
        const button = document.querySelectorAll("#feedback-slider button")
        if (button) {
            button[id].click()
        }
    }

    return (
        <div>
            <ButtonWrapper>
                <hr size="7" width="20%" color="black" />
                <p className="header-title"> O que falaram sobre </p>
                <p> Tech Center </p>
                <span>
                    <button onClick={e => hiddenClick(0)}>&lt;</button>
                    <button onClick={e => hiddenClick(1)}>&gt;</button>
                </span>
            </ButtonWrapper>
            <Container id="feedback-slider">
                <Slider {...settings}>
                    {feedbacks.map(e => <FeedBackCard key={e._id} text={e.Description} author={e.Author} />)}
                </Slider>
            </Container>
        </div>
    )
}