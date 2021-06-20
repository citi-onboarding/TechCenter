import styled from 'styled-components';


export const PartnershipContainer = styled.div`
    width: 100%;
    height: 16rem;
    background: var(--BACKGROUND-PARTNERSHIPS-SECTION);
    padding: 3rem 0 0 0;

    &.mid-partnerships {
        height: 12rem;
    }
`

export const Partnerships = styled.div`
    background: var(--BACKGROUND-PARTNERSHIPS-SECTION);
    width: 85%;

    margin: 0 auto;

    display: grid;
    grid-template-columns: 80% 20%;
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

`