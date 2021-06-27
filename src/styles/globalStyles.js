import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        border: 0;
    }
    html{
        font-size: 62.5%;
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;