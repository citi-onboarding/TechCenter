import styled from 'styled-components';

export const EventContainer = styled.header`
    width: 100%;
    height: 620px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--WHITE-BACKGROUND);

    @media (min-width: 990px) and (max-width: 1099px){
        height: 480px;
    }

    @media (min-width: 822px) and (max-width: 989px) {
        height: 430px;
    }

    @media(min-width: 426px) and (max-width: 822px){
        height: 310px;

    }
`

export const EventTopContainer = styled.div`
    width: 85%;
    height: 70%;

    background: var(--WHITE-BACKGROUND);

    display: grid;
    grid-template-columns: 20% 80%;

    margin-top: 8rem;

    div {

        &.hightlight-box {
            border-top: 0.7rem solid var(--BLACK);
            font-size: 2.0rem;
            color: var(--BLACK);
            font-weight: 700;
        }

        p {

            &.title {
                margin-top: 3rem;

            }

            &.description{
                width: 30rem;
                color: var(--BLACK); 
                font-weight: 400;
                font-size: 1.4rem;
                padding: 3.6rem 0rem 0rem 4.5rem;
            }
        }
    }

    @media (min-width: 990px) and (max-width: 1099px){
        height: 40%;
    }

    @media (max-width: 426px){
        grid-template-columns: auto;
        grid-template-rows: repeat(2, 30%);

        div {

            &.hightlight-box {
                width: 50%;
            }

            p {
                &.description {
                    width: 100%;
                    padding: 2.5rem 0rem 0rem 0rem;
                }
            }
        }
    }
`

export const EventCarousel = styled.div`
    width: 85%;

    position: relative;
    bottom: 8.5rem;

    @media (min-width: 990px) and (max-width: 1099px){
        bottom: 6.5rem;
    }

    @media (min-width: 822px) and (max-width: 989px) {
        bottom: 12rem;
    }

    @media (max-width: 426px) {
        width: 100%;
    }
`

export const EventCarouselContaier = styled.div`
    width: 100%;
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--FIRST-PRIMARY-COLOR);

`