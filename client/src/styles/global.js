import {
    createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --FIRST-PRIMARY-COLOR: #1B284C;
        --SECOND-PRIMARY-COLOR: #FAC747;  
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: 0;
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
    }
`