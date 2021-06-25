import styled from 'styled-components';

export const AboutUsContainer = styled.header`
    width: 100%;
    height:100% ;
    min-height: 410px;
    margin: 0 auto;
    margin-bottom: 10px;
    padding-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow-x: hidden;
    
    background: var(--FIRST-PRIMARY-COLOR);



    @media(min-width: 427px) and (max-width: 989px){
        height: 45rem;
    }

    @media (max-width: 426px){
        height: 750px;
    }
`

export const TopAboutUsContainer = styled.div`

    width: 85%;
    margin: 0 auto; 
    height: 50% ;
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
            border-top: 0.7rem solid var(--COLOR-TEXT);

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

        margin-bottom: 0rem;
        padding-top: 6rem;

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

    margin-bottom: 5rem;
    height: calc(50% + 5rem);

    display: grid;
    grid-template-columns: repeat(3,auto);
    outline: none;
    border: none;

    div {
        height: 30rem;
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
                width: 35rem ;
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

        &.mid-values {
            background: var(--WHITE-BACKGROUND);
            color: var(--FIRST-PRIMARY-COLOR);
            box-shadow: none;
            box-shadow: inset 0px 5px 2px -2px gray;
        }
    }

    @media(min-width: 427px) and (max-width: 821px){
        height: 20.4%;
    }



    @media(min-width: 822px) and (max-width: 996px){
        height: 43.5%;
    }



    @media(max-width: 426px){

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 45rem;

        div {

            display: grid;
            grid-template-columns: 40% 60%;
            grid-template-rows: 7.5rem 7.5rem;

            box-shadow: none;

            &.mid-values{
                box-shadow: none;
            }

            img {
                width: 9rem;
                height: 9rem;
                grid-column-start: 1;
                grid-column-end: 2;
                grid-row-start: 1;
                grid-row-end: 3;
                justify-self: center;
                margin-bottom: 4rem;
            }

            p {

                
                &.title, &.description {
                    margin-top: 0;
                    word-wrap: break-word;
                }

                &.title {
                    width: min-content;
                    grid-column-start: 2;
                    grid-column-end: 3;
                    grid-row-start: 1;
                    grid-row-end: 2;
                    border-bottom: 2px solid #F4F4F4;

                    width: 86%;

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
                    width: 86%;
                }

            }

            &.mid-values{
                background: var(--FIRST-PRIMARY-COLOR);
                color: var(--WHITE-BACKGROUND);
            }
        }
    }
`