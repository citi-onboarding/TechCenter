import styled from 'styled-components';

export const EventContainer = styled.header`
    width: 100%;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: var(--FIRST-PRIMARY-COLOR);
`

export const EventTopContainer = styled.div`
    width: 85%;
    height: 60%;

    background: black;

    display: grid;
    grid-template-columns: 20% 80%; 
`

export const EventCarousel = styled.div`
    width: 85%;
    height: 40%;

    background: pink;
`