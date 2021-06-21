import "./styles.css"

import { ButtonWrapper, Container, UpperWrapper } from "./styles.js";
import React, { useEffect, useState } from 'react'

import ArticleCard from "../ArticleCard";
import MEDIUM from "../../services/MEDIUM";
import Slider from "react-slick";

export default function ArticlesCarousel() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            MEDIUM.get("/@KonradDaWo").then(res => {
                console.log(res)
                setArticles(res.data.items)
                console.log(articles)
            }
            ).catch(e => console.log(e))
        }
        fetchData();
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1360,
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
                    initialSlide: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    const hiddenClick = function (id) {
        const hiddenButton = document.querySelectorAll("#article-slider button")[id]
        if (hiddenButton) {
            hiddenButton.click()
        }
    }

    function toText(node) {
        let tag = document.createElement('div')
        tag.innerHTML = node
        node = tag.innerText
        return node
    }
    function shortenText(text, startingPoint, maxLength) {
        console.log(text)
        return text.length > maxLength ?
            text.slice(startingPoint, maxLength) :
            text
    }

    return (
        <div>
            <UpperWrapper>
                <ButtonWrapper>
                    <hr size="7" width="20%" color="black" />
                    <p> Últimos artigos </p>
                    <span>
                        <button onClick={e => hiddenClick(0)}>&lt;</button>
                        <button onClick={e => hiddenClick(1)}>&gt;</button>
                    </span>
                </ButtonWrapper>
                <p className="right-text">
                    Somos uma comunidade e trocamos conhecimento de forma fluída e
                    constante. Estamos sempre em busca do intercâmbio das informações!
                </p>
            </UpperWrapper>
            <Container id="article-slider">
                <Slider {...settings}>
                    {articles.map(e => (
                        <ArticleCard
                            guid={e.guid}
                            title={shortenText(e.title, 0, 30)}
                            content={shortenText(toText(e.content), 60, 120)}
                            thumbnail={e.thumbnail}
                        />
                    ))}
                </Slider>
            </Container>
        </div>
    )
}