import styled from 'styled-components';


export const FooterContainer = styled.div`

    padding-top: 2rem;

    width: 100%;
    height: 28rem;

    background: var(--SECOND-PRIMARY-COLOR);

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
        height: 28rem;
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

`
export const FooterSocialMedia = styled.header`
    height: 18rem;
    background: var(--SECOND-PRIMARY-COLOR);

    margin-top: 9rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    div {

        &.text {
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
`