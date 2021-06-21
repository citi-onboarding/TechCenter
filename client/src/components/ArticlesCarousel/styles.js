import styled from 'styled-components';

export const Container = styled.div`    
    & > div{
        height: auto;
        &:first-of-type(button){ display: none; }
    }

    div{ margin:auto; }

    ul{
        height: 5rem;
    }

    background: linear-gradient(
    to bottom, 
    white 0%, 
    white 50%, 
    var(--BUTTON-TEXT-COLOR) 50%, 
    var(--BUTTON-TEXT-COLOR) 100%
    );

`

export const UpperWrapper = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: start;

    .right-text{
        color: black;
        width: 40ch;
        margin: auto 0rem;
    }
`

export const ButtonWrapper = styled.div`
    height: 30vh;
    width: 20vw;

    padding-left: 5vw;
    padding-bottom: 5vh;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    color:black;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    hr{
        width: 25rem;
    }

    button{
        width: 32px;
        height: 32px;
        background: white;
        border: 1px solid #D9D9D9;
        box-sizing: border-box;
        border-radius: 2px;

        margin-right: 1rem;

        &:hover{
            cursor: pointer;
        }
    }
`



