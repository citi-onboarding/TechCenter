import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--SECOND-PRIMARY-COLOR);
    width: 325px;
    height: 290px;

    @media(max-width:1100px){
        width: 290px;
        height: 160px;
    }
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    img{ margin: 1rem auto; }

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 1.12rem;
        line-height: 1.3rem;
        color: black;

        margin: 1rem auto;

        width: clamp(45ch, 50%, 75ch);

        @media(max-width:1100px){
            width: clamp(35ch, 50%, 50ch);
        }

    }

    h3{
        font-style: normal;
        font-weight: bold;
        font-size: 1.12rem;
        line-height: 1.3rem;
        color: black;

        margin: 1rem auto;
    }
`