import styled from 'styled-components';

export const CarouselItemContainer = styled.header`
    width: 25rem;
    height: 25rem;

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

`

export const CarouselItemContainerImage = styled.div`
    height: 58%;
    background-image: url("https://s2.glbimg.com/QqEDyJyWVPTI9tU-5izKpJls6UE=/620x520/smart/e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg");
    background-size: cover;
`

export const CarouselItemContainerInformation = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 1.8rem;

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


`