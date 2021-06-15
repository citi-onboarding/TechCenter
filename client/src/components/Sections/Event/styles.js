import styled from 'styled-components';

export const EventContainer = styled.header`
    width: 100%;
    height: 95vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: var(--WHITE-BACKGROUND);
`

export const EventTopContainer = styled.div`
    width: 85%;
    height: 80%;

    background: var(--WHITE-BACKGROUND);

    display: grid;
    grid-template-columns: 20% 80%;

    margin-top: 8rem;

    div {

        &.hightlight-box {
            border-top: 7px solid var(--BLACK);
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
`

export const EventCarousel = styled.div`
    width: 85%;

    position: relative;
    bottom: 8rem;
`

export const EventCarrouselContaier = styled.div`
    width: 100%;
    height:50%;

    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--FIRST-PRIMARY-COLOR);

`