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

`

export const ButtonWrapper = styled.div`
    height: 30vh;

    padding-left: 5vw;
    padding-bottom: 5vh;
    
    display: flex;
    flex-direction: column;

    p {
        &.header-title {
            margin-top: 2rem;
        }
    }

    
    color:black;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    @media(max-width: 1200px){        
        span{display:none;}
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

