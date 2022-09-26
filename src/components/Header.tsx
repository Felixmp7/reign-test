import styled from 'styled-components';

const HeaderStyled = styled.header`
    height: 7.125rem;
    display: flex;
    align-items: center;
    font-family: 'Baskerville';

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
`;

const Header = () => (
    <HeaderStyled>
        <h1>Hacker News</h1>
        <span>
            by Felix Pacheco
        </span>
    </HeaderStyled>
);

export default Header;
