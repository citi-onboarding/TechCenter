import styled from 'styled-components';

export const MainContainer = styled.div`
    height: 100vh;
    background: linear-gradient(
    to bottom, 
    white 0%, 
    white 50%, 
    var(--BUTTON-TEXT-COLOR) 50%, 
    var(--BUTTON-TEXT-COLOR) 100%
    );
`

export const Container = styled.div`    
    & > div{
        height: auto;
        &:first-of-type(button){ display: none; }
    }

    div{ margin:auto; }

    @media(max-width:1200px){
        ul{
            height: none;
            display: none;
        }
    }
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

    @media(max-width: 1200px){
        .right-text{
            display: none;
        }
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

    button:hover{
        cursor: pointer;
        background: var(--SECOND-PRIMARY-COLOR);
        color: var(--FIRST-PRIMARY-COLOR);
        outline: none;
        border: none;
    }

    @media(max-width: 1200px){
        .blueBtn{
            display: none;
        }
    }

    .blueBtn{
        width: 137px;
        height: 56.6px;
        left: 135px;
        top: 4237px;

        background: #1B284C;
        border: 2.09375px solid #1B284C;
        box-sizing: border-box;
        border-radius: 4.1875px;

        font-style: normal;
        font-weight: bold;
        font-size: 16.8098px;
        line-height: 39px;
        color: #F4F4F4;
    }

`



