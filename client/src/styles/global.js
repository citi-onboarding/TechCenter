import {
    createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root  {
        --PRIMARY-BLUE-COLOR: "#1B284C";
        --PRIMARY-YELLOW-COLOR: "#F1C40F";
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