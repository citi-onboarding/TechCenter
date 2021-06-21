import styled from 'styled-components';

export const AboutUsContainer = styled.header`
    width: 100%;
    height: 650px;
    margin: 0 auto;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background: var(--FIRST-PRIMARY-COLOR);

    @media(min-width: 426px) and (max-width: 989px){
        height: 450px;

    }
`

export const TopAboutUsContainer = styled.div`

    width: 85%;
    margin: 0 auto; 
    height: 50%;
    display: grid;
    grid-template-columns: 38% 42% 20%;

    img {
        width: 25rem;
        justify-self: center;
        margin-top: 2rem;
    }

    div {

        &.mid-top-about-us, &.last-top-about-us {
            background: var(--FIRST-PRIMARY-COLOR);
        }

        &.mid-top-about-us{
            justify-self: center;
            word-wrap: break-word;
            margin-top: 5.5rem;
            
            p {
                width: 26rem;
                height: 9rem;
                margin-left: 4rem;
                font-size: 1.4rem;
                font-weight: 400;
            }
        }
        
        &.last-top-about-us{
            border-top: 7px solid var(--COLOR-TEXT);

            p {
                text-align: right;
                font-size: 2rem;
                font-weight: 700;
                
                &.title {
                    margin-top: 4rem;
                }
            }

        }
    }
    
    @media (max-width: 426px){

        height: 35%;

        img {
            display: none;
        }

        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;

        margin-bottom: 8rem;

        div {
            &.mid-top-about-us{
                margin-top: 2rem;
            }
        }
    }
`

export const ValuesAboutUsContainer = styled.div`

    width: 100%;
    height: 50%;

    display: grid;
    grid-template-columns: repeat(3,auto);
    outline: none;
    border: none;

    div {
        border-right: 1px solid black;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        box-shadow: 0 4px 2px -2px gray;

        img {
            width: 10.1rem;
            height: 10rem;
        }

        p {

            word-wrap: break-word;
            text-align: center;
            width: 36rem;

            &.title {
                width: max-content ;
                margin-top: 2rem;
                font-size: 2rem;
                font-weight: 700;
            }

            &.description {
                margin-top: 2rem;
                width: 24rem;
                font-weight: 400;
                font-size: 1.4rem;
            }
        }

        &.mid-values{
            background: var(--WHITE-BACKGROUND);
            color: var(--FIRST-PRIMARY-COLOR);
            box-shadow: none;
            box-shadow: inset 0px 5px 2px -2px gray;
        }
    }

    @media(max-width: 426px){

        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100rem;

        div {

            display: grid;
            grid-template-columns: 40% 60%;
            grid-template-rows: 8rem 8rem;

            box-shadow: none;

            img {
                width: 7rem;
                grid-column-start: 1;
                grid-column-end: 2;
                grid-row-start: 1;
                grid-row-end: 3;
                justify-self: center;

                
            }

            img path {
                fill: #F4F4F4;
            }

            p {
                &.title, &.description {
                    margin-top: 0;
                    word-break: break-all;
                }

                &.title {
                    grid-column-start: 2;
                    grid-column-end: 3;
                    grid-row-start: 1;
                    grid-row-end: 2;
                    border-bottom: 2px solid #F4F4F4;

                    align-self: center;
                    text-align: left;
                }

                &.description {
                    grid-column-start: 2;
                    grid-column-end: 3;
                    grid-row-start: 2;
                    grid-row-end: 3;
                    text-align: left;
                    align-self: flex-start;

                }

            }

            &.mid-values{
                background: var(--FIRST-PRIMARY-COLOR);
                color: var(--WHITE-BACKGROUND);
            }
        }
    }
`