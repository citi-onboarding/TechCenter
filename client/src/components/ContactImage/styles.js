import styled from 'styled-components';


export const ContactImageContainer = styled.header`
    width: 100%;
    height: 40rem;

    @media(max-width: 426px){
        height: 30rem;
    }
`

export const ContactImageContent = styled.div`
    width: 85%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
        margin-top: 3rem;
        margin-left: 5rem;
        width: 30rem;
        height: 27rem;
    }
`

export const ContactImageContentImage = styled.div`

    width: 45%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ContactImageContentMobile = styled.div`
    width: 85%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    div {
        width: 100%;

        &.left {
            display: flex;
            justify-content: flex-start;
            margin-right: 6.5rem;
            overflow: hidden;
        }

        &.right {
            display: flex;
            justify-content: flex-end;
            margin-left: 6.5rem;
            overflow: hidden;
        }
    }

`

export const ContactImageContentImageMobile = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`