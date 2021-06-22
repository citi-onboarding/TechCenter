import styled from 'styled-components';

export const PartnershipContainer = styled.div`

    width: 12rem;
    height: 4.5rem;

    margin: 1rem 0rem 0rem 0rem;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;

    &.margin-mid-partnerships{
        margin: 1rem auto;
    }

    @media(max-width:426px){
        width: 10rem;
        height: 3.5rem;
        margin: 1rem auto;
    }

`
