import styled from 'styled-components';


export const PartnershipContainer = styled.div`
    width: 100%;
    height: 18rem;
    background: var(--BACKGROUND-PARTNERSHIPS-SECTION);
    padding: 3rem 0 0 0;
`

export const Partnerships = styled.div`
    height: 90%;
    width: 85%;

    margin: 0 auto;

    display: grid;
    grid-template-columns: 80% 20%;
` 

export const PartnershipsInformation = styled.div`
    height: 90%;
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
    height: 90%;
    background: red;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: var(--BACKGROUND-PARTNERSHIPS-SECTION);

`