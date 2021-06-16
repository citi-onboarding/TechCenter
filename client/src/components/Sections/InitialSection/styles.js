import styled from 'styled-components';

export const InitialSectionContainer = styled.header`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    height: 92vh;
    width: 100%;

    background: var(--FIRST-PRIMARY-COLOR);
`

export const InitialSectionTextContainer = styled.div`
    margin-left: 4rem;
    margin-bottom: 6rem;
    width: 40rem;

    p {
        &.title{
            margin-bottom: 2rem;
            font-weight: bold;
            font-size: 2.4rem;
        }

        &.description {
            text-align: justify;
            margin-bottom: 3rem;
        }
    }
`

export const InitialSectionImageContainer = styled.div`

    margin-bottom: 14rem;

    img {
        width: 37rem;
        margin-left: 1.8rem;
    }
`