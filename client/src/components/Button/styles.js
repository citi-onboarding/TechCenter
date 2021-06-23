import styled from 'styled-components';

export const ButtonContainer = styled.div`

    button {
        cursor: pointer;
        
        padding: 1.8rem 1.3rem;
        outline: none;
        border: none;
        border-radius: 4px;
        font-weight: bold;
    
        &.join-to-community {
            width: 17rem;
            height: 5rem;
            
            background: var(--SECOND-PRIMARY-COLOR);
            color: var(--FIRST-PRIMARY-COLOR);
        }
    }

    @media (min-width: 1100px) and (max-width: 1250px){

        button {
            
            &.join-to-community {
                width: 19rem;
            }

        }
    }

    @media (min-width: 427px) and (max-width: 1099px){

        button {
            font-size: 1.4rem;
            
            &.join-to-community {
                width: 19rem;
            
            }

        }
    }
`