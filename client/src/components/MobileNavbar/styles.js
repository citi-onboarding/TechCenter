import styled from 'styled-components';

export const Container = styled.nav`
    @media(min-width: 1200px){
        &{
            display: none;
        }
    }

    background-color: var(--FIRST-PRIMARY-COLOR);
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img{
        margin: 5px;
    }
`