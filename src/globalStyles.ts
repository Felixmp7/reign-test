import { createGlobalStyle } from 'styled-components';

export const globalTheme = {
    azure: '#1797ff',
    brownishGray: '#6b6b6b',
};

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto';
    }
    body {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
