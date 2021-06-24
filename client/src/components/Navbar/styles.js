import styled from 'styled-components';

export const Container = styled.nav`
    @media(max-width: 1200px){
        &{
            display: none;
        }
    }

    background-color: var(--FIRST-PRIMARY-COLOR);
    height: 8vh;
    width: 100%; 

    z-index: 2;

    position:  ${props => props.top ? "fixed" : "auto"};
    top: ${props => props.top ? "0" : "auto"};;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    ul{
        list-style: none;
        display: flex;
        flex: row;
        justify-content: space-between;
        align-items: center;

        padding: 0 5rem;

        height: 50%;
    }

    span{
        list-style: none;
        display: flex;
        flex: row;
        justify-content: space-around;
        align-items: center;

        width: 40%;

        a:hover{
            filter: brightness(0.6);
        }
    }

    a{
        color: var(--COLOR-TEXT) !important;
        text-decoration: none;
        font-family: 'Barlow', sans-serif;
        font-weight: bold;
        font-size: 1.8rem;
        line-height: 1.7rem;
    }

    img{
            height: 5rem;
            width: auto;
            margin-left: 5rem
        }

`

