import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--SECOND-PRIMARY-COLOR);
    width: 424px;
    height: 225px;
    border-radius: 30px;

    @media(max-width:1440px){
        width: 324px;
    }

    @media(max-width:1200px){
        width: 284px;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    img{ margin: 1rem auto; }

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 1.9rem;
        line-height: 2rem;
        color: black;

        margin: 1rem auto;

        /* width: clamp(45ch, 50%, 75ch); */
        width: 90%;
    }

    h3{
        font-style: normal;
        font-weight: bold;
        font-size: 2.1rem;
        line-height: 2.2rem;
        color: black;
        width: 90%;

        margin: 1rem auto;
    }
`