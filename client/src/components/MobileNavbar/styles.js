import styled from 'styled-components';

export const Container = styled.nav`
    .navText{
        text-decoration: none;
        color: black;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
    }

    @media(min-width: 1200px){
        &{ display: none; }
    }

    button{
        background: none;
        border: none;
    }

    #anchor{
        margin-right: 5rem;
    }
    
    background-color: var(--FIRST-PRIMARY-COLOR);
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img{ margin: 5px;}
`