import styled from 'styled-components';

export const ContactFormsContainer = styled.header`
    width: 100%;
    height: 40rem;

    background: var(--FIRST-PRIMARY-COLOR);

    @media(max-width: 426px){
        height: 50rem;

        background: linear-gradient(
            to bottom, 
            var(--FIRST-PRIMARY-COLOR) 60%, 
            var(--WHITE-BACKGROUND) 60% 100%
        );
    }
`

export const ContactInformation = styled.header`
    width: 20%;
    height: 26rem;

    border-top: 0.7rem solid var(--BORDER-CONTACT-SECTION);

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
        text-align: right;

        &.title {
            font-size: 2rem;
            margin: 2rem 0;

        }

        &.information{
            width: 28rem;
            height: 6rem;
            font-size: 1.4rem;

            margin-bottom: 2rem;

        }
    }

    @media(max-width: 426px){
        width: 50%;
        align-self: flex-end;

        div {
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
    }
`


export const ContactFormsContent = styled.div`
    width: 85%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


    form {
        width: 60rem;
        height: 26rem;
        border-radius: 10px;
        background: var(--FORMS);

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        div {
            margin: 2rem auto;
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                margin-left: 3rem;
                font-weight: bold;
                color: var(--FIRST-PRIMARY-COLOR); 
                width: 40rem;
            }
        }


        input {
            outline: none;
            border: none;
            margin: 2.2rem 0 0 6rem;
            width: 83%;
            background: var(--FORMS);

            border-bottom: 1px solid var(--LINE-INPUT);

            font-family: 'Roboto', sans-serif;
            color: var(--BLACK);

            &.first-input {
                margin-top: 4rem;
            }

            :focus{
                color: var(--BLACK);
            }
        }

        button {
            cursor: pointer;
            padding: 1.5rem 3rem;
            align-self: flex-end;

            border-radius: 4.19px;

            border: none;

            color: var(--COLOR-TEXT);
            font-weight: bold;

            background-color: var(--FIRST-PRIMARY-COLOR);

            :hover {
                background-color: var(--SECOND-PRIMARY-COLOR);
                color:  var(--FIRST-PRIMARY-COLOR);
            }
        }
    }

    @media (min-width: 822px) and (max-width: 989px){

        form {
            width: 70rem;
            height: 30rem;
        }
    }

    @media (min-width: 427px) and (max-width: 821px){

        form {
            width: 80rem;
            height: 32rem;

            button {
                font-size: 1.5rem;
            }
        }
    }

    @media(max-width: 426px){
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;

        div {
            margin: 1rem auto;
        }

        form {
            width: 36rem;
            height: 24rem;


            input {
                margin: 2.2rem 0 0 4.5rem;
                width: 80%;
            }

            button {
                padding: 1rem 2rem;
            }
        }
    }
`