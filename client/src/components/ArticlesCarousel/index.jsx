import { ButtonWrapper, Container, MainContainer, UpperWrapper } from "./styles.js";
import React, { useEffect, useState } from 'react'

import ArticleCard from "../ArticleCard";
import MEDIUM from "../../services/MEDIUM";
import Slider from "react-slick";

export default function ArticlesCarousel() {
    const [articles, setArticles] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        async function fetchData() {
            MEDIUM.get("/@KonradDaWo").then(res => {
                setArticles(res.data.items)
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
                    slidesToShow: 4,
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



    function toText(node) {
        let tag = document.createElement('div')
        tag.innerHTML = node
        node = tag.innerText
        return node
    }
    function shortenText(text, startingPoint, maxLength) {
        return text.length > maxLength ?
            text.slice(startingPoint, maxLength) :
            text
    }


    useEffect(() => {
        if (window.innerWidth < 1200) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
        console.log(isMobile)
    })

    return (
        <MainContainer>
            <UpperWrapper>
                <ButtonWrapper>
                    <hr size="7" width="20%" color="black" />
                    <p> Últimos artigos </p>
                    <button className="blueBtn">Saiba mais</button>
                </ButtonWrapper>
                <p className="right-text">
                    Somos uma comunidade e trocamos conhecimento de forma fluída e
                    constante. Estamos sempre em busca do intercâmbio das informações!
                </p>
            </UpperWrapper>
            <Container id="article-slider" isMobile={isMobile}>
                <Slider {...settings}>
                    {articles.map(e => (
                        <ArticleCard
                            key={e.guid}
                            guid={e.guid}
                            title={shortenText(e.title, 0, 30)}
                            content={shortenText(toText(e.content), 60, 120)}
                            thumbnail={e.thumbnail}
                        />
                    ))}
                </Slider>
            </Container>
        </MainContainer>
    )
}