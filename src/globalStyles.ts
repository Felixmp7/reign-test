import { createGlobalStyle } from 'styled-components';

export const globalTheme = {
    azure: '#1797ff',
};

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;

export default GlobalStyle;
