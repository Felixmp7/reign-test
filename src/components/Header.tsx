import { breakPoints, maxWidth } from 'globalStyles';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    height: 7.125rem;
    box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
    background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);

    > .max-width-container {
        font-family: 'Baskerville';
        max-width: ${maxWidth};
        display: flex;
        align-items: center;
        height: 100%;
        margin: auto;

        h1 {
            object-fit: contain;
            font-family: inherit;
            text-transform: uppercase;
            font-size: 1.75rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: normal;
            color: #3b3b3b;
        }
        span {
            margin-left: 1rem;
            font-family: inherit;
            color: #c5c5c5;
            font-size: .75rem;
        }

        @media (max-width: ${breakPoints.laptop}) {
            width: 100%;
            padding: 0 2rem;
        }
    }

`;

const Header = () => (
    <HeaderStyled>
        <div className="max-width-container">
            <h1>Hacker News</h1>
            <span>
                by Felix Pacheco
            </span>
        </div>
    </HeaderStyled>
);

export default Header;
