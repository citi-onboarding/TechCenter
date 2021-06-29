import styled from 'styled-components';

export const Container = styled.nav `

    /* position:  ${props => props.top ? "fixed" : "auto"}; */
    /* top: ${props => props.top ? "0" : "auto"};  */

    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 5;

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