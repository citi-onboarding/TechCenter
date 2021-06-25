import styled from 'styled-components';

export const InitialSectionContainer = styled.header`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    overflow-x: hidden;

    height: 92vh;
    width: 100%;

    background: var(--FIRST-PRIMARY-COLOR);

    @media(max-width: 425px) {
        height: 55rem;
    }
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

    @media(max-width: 425px){
        margin-left: 5rem;
        width: 60%;

        div {
            display: flex;
            flex-direction: column;
        }

        p {

            &.title {
                font-size: 2rem;
            }

            &.description {
                font-size: 1.2rem;
                width: 24rem;
            }
        }
    }
`

export const InitialSectionImageContainer = styled.div`

    margin-bottom: 14rem;

    img {
        width: 37rem;
        margin-left: 3rem;
    }

    @media(max-width: 425px){
        width: 40%;

        display: flex;
        align-self: flex-end;
        justify-self: flex-end;

        margin-bottom: 0rem;
        padding-left: 1.5rem;


        img {
            width: 20rem;
            overflow: hidden;
        }
    }
`