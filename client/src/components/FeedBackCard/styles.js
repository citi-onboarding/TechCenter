import styled from 'styled-components';

export const Container = styled.div `
    background-color: var(--SECOND-PRIMARY-COLOR);
    border-radius: 30px;
    
    width: 20vw;
    height: calc(20vw * 0.65);

    @media(max-width:1500px){
        width: 324px;
        height: calc(324px * 0.68);
    }

    @media(max-width:1440px){
        width: 324px;
        height: calc(324px * 0.65);
    }

    @media(max-width:1200px){
        width: 315px;
        height: calc(315px * 0.65);
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    img{ 
        width: 39.2px;
        height: 24.86px;
        margin: 1rem auto; 
        }

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 1.8rem;
        line-height: 1.9rem;
        color: black;

        margin: 1rem auto;

        /* width: clamp(35ch, 50%, 45ch); */
        width: 90%;
    }

    @media(min-width:460px) and  (max-width:1200px){
        p{
            font-size: calc(100% / 51ch);
            line-height: 2.9rem;
        }
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