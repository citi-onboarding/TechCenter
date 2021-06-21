import styled from 'styled-components';

export const EventCarouselItemContainer = styled.header`
    width: 26rem;
    height: 26rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    background: #f5f5f5;

    margin: 0 auto 0 0;

    div {

        p {
            color: var(--BLACK);
        }
    }


    @media (min-width:427px) and (max-width: 635px){
        width: 20rem;
        height: 20rem;
    }

`

export const EventCarouselItemContainerImage = styled.div`
    height: 58%;
    width: 26rem;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;

    @media (min-width:427px) and (max-width: 635px) {
        width: 20rem;
    }
`

export const EventCarouselItemContainerInformation = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 1.8rem;
    width: 23rem;
    word-wrap: break-word;

    p {
        &.title, &.description, &.date {
            margin-top: 0.8rem;
        }

        &.title {
            font-weight: 500;
        }

        &.description, &.date {
            font-size: 1.4rem;
        }
    }

    @media (min-width:427px) and (max-width: 635px) {
        p {
            &.description, &.date {
                font-size: 1.2rem;
            }
            
            &.title {
                font-size: 1.4rem;
            }

        }
    }
`

export const EventCarouselItemButton = styled.div`
    width: 100%;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 0.2rem;

    div {
        margin-right: 1.5rem;
        cursor: pointer;
    }
`