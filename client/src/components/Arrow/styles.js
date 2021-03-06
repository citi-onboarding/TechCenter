import styled from 'styled-components';

export const ArrowContainer = styled.div`
    width: 2.6rem;
    height: 2.6rem;
    background: var(--BUTTON-SLICK);
    border: 1px solid var(--BORDER-ARROW-COLOR);

    display: flex;
    align-items: center;
    justify-content: center;

    &.right {
        position: relative;
        top: -5rem;
        left: 3rem;
    }

    &.left {
        position: relative;
        top: -33.8rem;
        left: 0rem;
    }

    @media (min-width: 1100px) and (max-width: 1250px){

        &.right {
            top: -12rem;
        }

        &.left {
            top: -40.8rem;
        }
    }

    @media(min-width: 427px) and (max-width: 822px){
        &.right {
            top: -6rem;
        }

        &.left {
            top: -35rem;
        }
    }

    @media (max-width: 426px){
        &.right, &.left {
            display: none;
        }
    }
`

export const ArrowStyle = {
    color: "var(--ARROW-COLOR)",
    fontSize: "1.3rem"
}