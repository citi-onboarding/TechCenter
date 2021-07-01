import {
    createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --FIRST-PRIMARY-COLOR: #1B284C;
        --SECOND-PRIMARY-COLOR: #FAC747;
        --COLOR-TEXT: #F4F4F4;
        --BUTTON-TEXT-COLOR: #1B284C;
        /* --WHITE-BACKGROUND: #E5E5E5; */
        --WHITE-BACKGROUND: #FFFFFF;
        --BLACK: #000000;
        --CIRCLE-SLICK-WITHOUT-HIGHLIGHT: #898C8F;
        --CIRCLE-SLICK-IN-HIGHTLIGHT:#E0E0E0;
        --BUTTON-SLICK: #FFFFFF;
        --ARROW-COLOR: #262626;
        --BORDER-ARROW-COLOR: #D9D9D9;
        --BACKGROUND-PARTNERSHIPS-SECTION: #F4F4F4;
        --BORDER-CONTACT-SECTION: #F4F4F4;
        --FORMS: #F4F4F4;
        --LINE-INPUT: #999999;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: 0;
        text-decoration: none;
        list-style: none;
        scroll-behavior: smooth;
    }

    html {
        font-size: 62.5%;
    }

    html, body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: normal;
        color: var(--COLOR-TEXT);
        background: var(--WHITE-BACKGROUND);
    }

    @media (min-width: 1100px) and (max-width: 1250px){
        html {
            font-size: 55%;
        }
    }

    @media (min-width: 990px) and (max-width: 1099px){
        html {
            font-size: 50%;
        }
    }

    @media (min-width: 822px) and (max-width: 989px){
        html {
            font-size: 40%;
        }
    }

    @media (min-width: 427px) and (max-width: 821px){
        html {
            font-size: 30%;
        }
    }

    @media(min-width: 2560px){
        html {
            font-size: 68%;
        }
    }
`