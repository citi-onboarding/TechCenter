import styled from 'styled-components';

export const PartnershipContainer = styled.div`

    width: 12rem;
    height: 4.5rem;

    margin: 1rem;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
`
