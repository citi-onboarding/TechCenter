import styled from 'styled-components';

export const AboutUsContainer = styled.header`
    width: 100%;
    height: 90vh;
    margin: 0 auto;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background: var(--FIRST-PRIMARY-COLOR);
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

    
`

export const ValuesAboutUsContainer = styled.div`

    width: 100%;
    height: 50%;

    display: grid;
    grid-template-columns: repeat(3,auto);

    div {
        border-right: 1px solid black;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        box-shadow: 0 4px 2px -2px gray;;

        p {

            word-wrap: break-word;
            text-align: center;

            &.title {
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
        }

    }

`