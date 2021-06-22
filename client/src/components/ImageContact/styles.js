import styled from 'styled-components';

export const ImageContactContainer = styled.div`

    width: 23rem;
    height: 23rem;

    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;

    @media(max-width: 426px){
        width: 20rem;
        height: 20rem;
    }

`