import styled from 'styled-components';

export const Container = styled.div`

    width: 100vw; 
    height: 8vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: var(--FIRST-PRIMARY-COLOR);
    background-color: var(--FIRST-PRIMARY-COLOR);

    .menuBtn{
        margin: 1rem;
        background: none;
        border: none;
    }

    .dropDown{
        height: 50%;
        width: auto;
        margin-left: auto;
    }

    img{
        margin: 1rem;
    }

    @media(min-width:1099px){
        display:none;
    }
`

