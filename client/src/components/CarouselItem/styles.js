import styled from 'styled-components';

export const CarouselItemContainer = styled.header`
    width: 25rem;
    height: 25rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    background: #f5f5f5;

    margin-bottom: 40px;


    div {

        p {
            color: var(--BLACK);
        }
    }

`

export const CarouselItemContainerImage = styled.div`
    height: 58%;

    img {
        width: 100%;
        height: 100%;
    }
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