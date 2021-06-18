import styled from 'styled-components';

export const ImageContactContainer = styled.div`

    width: 20rem;
    height: 20rem;

    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;

`