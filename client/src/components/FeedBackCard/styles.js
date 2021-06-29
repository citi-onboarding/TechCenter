import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--SECOND-PRIMARY-COLOR);
    border-radius: 30px;
    
    width: 524px;
    height: calc(524px * 0.62);

    @media(max-width:1440px){
        width: 324px;
        height: calc(324px * 0.62);
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

    img{ margin: 1rem auto; }

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 1.8rem;
        line-height: 1.9rem;
        color: black;

        margin: 1rem auto;

        /* width: clamp(45ch, 50%, 75ch); */
        width: 90%;
    }

    @media(min-width:460px) and  (max-width:1200px){
        p{
            font-size: 3rem;
            line-height: 3.1rem;
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