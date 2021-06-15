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
    width: 250px;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
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