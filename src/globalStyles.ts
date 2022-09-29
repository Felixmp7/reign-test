import { createGlobalStyle } from 'styled-components';

export const globalTheme = {
    azure: '#1797ff',
    brownishGray: '#6b6b6b',
};

export const maxWidth = '71.25rem';

export const breakPoints = {
    laptop: '75rem',
    tablet: '48.375rem',
};

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto';
        ::-webkit-scrollbar {
            width: 3px;
        }

        ::-webkit-scrollbar-track {
            border-radius: 100%;
            background-color: #f2f2f2;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #e2e2e2;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: #a2a2a2;
        }
    }

    * li {
        list-style: none;
    }
    * a {
        text-decoration: none;
    }
    * button {
        cursor: pointer;
    }
    body {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
