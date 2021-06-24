import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--SECOND-PRIMARY-COLOR);
    width: 32.75rem;
    height: 20.3rem;
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