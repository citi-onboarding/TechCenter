import styled from 'styled-components';

export const ImageContactContainer = styled.div`

    width: 23rem;
    height: 23rem;

    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;

`