import { createGlobalStyle } from 'styled-components';
import RobotoFont from './fonts';

const GlobalStyle = createGlobalStyle`
    ${RobotoFont}
    *{
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        border: 0;
    }
    html{
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;