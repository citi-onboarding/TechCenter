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

    width: 90vw;
    margin: auto;
    & > div{
        height: auto;
        &:first-of-type(button){ display: none; }
    }

    div{ margin:auto; }

    ul{ 
        display: none !important;
        height: none !important;
    }

    @media (max-width: 1100px) {
        ul{ 
            display: block !important; 
            height: 5rem !important;
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
        display: block;
    }
    @media (max-width: 1100px) {
        .right-text{ display: none; }
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



