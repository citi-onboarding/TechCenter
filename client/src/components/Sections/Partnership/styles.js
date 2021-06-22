import styled from 'styled-components';


export const PartnershipContainer = styled.div`
    width: 100%;
    height: 16rem;
    background: var(--BACKGROUND-PARTNERSHIPS-SECTION);
    padding: 3rem 0 0 0;

    &.mid-partnerships {
        height: 12rem;
    }

    @media (max-width: 426px){
        height: 30rem;

        &.mid-partnerships {
            height: 20rem;
        }
    }
`

export const Partnerships = styled.div`
    background: var(--BACKGROUND-PARTNERSHIPS-SECTION);
    width: 85%;

    margin: 0 auto;

    display: grid;
    grid-template-columns: 80% 20%;

    @media (max-width: 426px){
        display: flex;
        flex-direction: column-reverse;
    }
` 

export const PartnershipsInformation = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    border-top: 7px solid var(--BLACK);
    font-weight: 700;
    font-size: 2rem;
    text-align: right;
    color: var(--BLACK);
    background: var(--BACKGROUND-PARTNERSHIPS-SECTION);

    @media(max-width: 426px){
        width: 50%;
        align-self: flex-end;
        font-size: 1.8rem;

        padding-top: 1rem;
    }

`

export const PartnershipsImages = styled.div`
    height: 15rem;
    width: 80%;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: var(--BACKGROUND-PARTNERSHIPS-SECTION);

    &.mid-partnerships {
        flex-direction: row;
        height: 12rem;
        width: 90%;
    }

    @media(max-width: 426px){
        width: 100%;
        height: fit-content;
        max-height: 40rem;

        flex-direction: row;
        margin-top: 1.8rem;
    }

`