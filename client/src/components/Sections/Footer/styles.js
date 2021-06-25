import styled from 'styled-components';


export const FooterContainer = styled.div`

    padding-top: 2rem;

    width: 100%;
    height: 27rem;

    background: var(--SECOND-PRIMARY-COLOR);

    @media (max-width: 426px){
        height: 24rem;
    }

`

export const FooterContent = styled.div`

    width: 85%;
    height: 100%;
    margin: 0 auto;
    background: var(--SECOND-PRIMARY-COLOR);

    display: grid;

    grid-template-columns: 20% 60% 20%;

    img {
        width: 32rem;
        height: auto;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            width: 40rem;
            margin-left: 5rem;
            text-align: center;
            color: var(--FIRST-PRIMARY-COLOR);
            font-weight: bold;
        }
    }

    @media(max-width: 426px){

        grid-template-rows: 30% 40% 30%;

        img {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 2;
            grid-row-end: 3;
            width: 18rem;
            height: auto;
            justify-self: start;
        }

        div {
            display: grid;
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 2;
            align-items: center;
            justify-content: center;

            p {
                width: auto;
                font-size: 1.2rem;
                margin: 0;
            }

        }
    }

`
export const FooterSocialMedia = styled.header`
    height: 16rem;
    background: var(--SECOND-PRIMARY-COLOR);

    margin-top: 7.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    div {
        
        &.text {
            display: flex;
            flex: row;
            align-items: center;
            p {
                width: 100%;
                margin: 0 auto;
            }
        }

        &.social {
            width: 75%;
            margin-top: 1.7rem;
            display: flex;
            justify-content: space-between;
            border-top: 3px solid var(--FIRST-PRIMARY-COLOR);

            img {
                margin-top: 2rem;
            }
        }

        img {
            cursor: pointer;
            width: 3rem;
            height: 3rem;
        }
    }

    @media(max-width: 426px){
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 4;


        height: 14rem;
        width: 14rem;
        justify-self: end;
        align-self: flex-end;

        margin-top: 0rem;
        margin-bottom: 1rem;

        div {

            img {
                width: 2rem;
                height: 2rem;
            }

            &.text {
                p {
                    font-size: 1.0rem;
                }
            }
        }
    }
`