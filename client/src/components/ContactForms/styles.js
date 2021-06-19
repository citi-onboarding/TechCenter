import styled from 'styled-components';

export const ContactFormsContainer = styled.header`
    width: 100%;
    height: 40rem;

    background: var(--FIRST-PRIMARY-COLOR);
`

export const ContactInformation = styled.div`
    width: 20%;
    height: 26rem;

    border-top: 7px solid var(--BORDER-CONTACT-SECTION);

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

            position: relative;
            right: 6.5rem;

            margin-bottom: 2rem;

        }
    }

    div {
        display: flex;
        justify-content: flex-end;
    }
`


export const ContactFormsContent = styled.div`
    width: 85%;
    height: 100%;
    margin: 0 auto;
    background: var(--FIRST-PRIMARY-COLOR);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


    form {
        width: 60rem;
        height: 26rem;
        border-radius: 10px;
        background: white;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;


        input {
            outline: none;
            border: none;
            margin: 2.2rem 0 0 6rem;
            width: 83%;

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
            padding: 1.5rem 3rem;
            margin-top: 2.5rem;
            align-self: flex-end;

            border-radius: 4.19px;

            margin-right: 4rem;
            border: none;

            color: var(--COLOR-TEXT);
            font-weight: bold;

            background-color: var(--FIRST-PRIMARY-COLOR);
        }
    }
`