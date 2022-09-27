import useFiltersContext from 'hooks/useFiltersContext';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-flex;
    align-items: center;
`;

type SButtonProps = {
    isActive?: boolean,
    ignoreRightBorder?: boolean,
}

const Button = styled.button<SButtonProps>`
    background: transparent;
    width: 6.125rem;
    height: 1.938rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: center;
    color: ${({ isActive, theme }) => (isActive ? theme.azure : '#606060')};
    border: 1px solid ${({ isActive, theme }) => (isActive ? theme.azure : '#d6d6d6')};
    border-right: ${({ ignoreRightBorder }) => (ignoreRightBorder ? 0 : '')};
    border-radius: ${({ ignoreRightBorder }) => (ignoreRightBorder
        ? '2px 0px 0px 2px'
        : '2px'
    )};
`;

const MainFilter = () => {
    const { filtersState, setFiltersState } = useFiltersContext();

    const handleSetFilterByFavs = (changeToFav: boolean) => {
        setFiltersState({ ...filtersState, isFilteredByFavs: changeToFav });
    };

    return (
        <Container>
            <Button
                type="button"
                onClick={() => handleSetFilterByFavs(false)}
                ignoreRightBorder
                isActive={!filtersState?.isFilteredByFavs}
            >
                All
            </Button>
            <Button
                type="button"
                onClick={() => handleSetFilterByFavs(true)}
                isActive={filtersState?.isFilteredByFavs}
            >
                My favs
            </Button>
        </Container>
    );
};

export default MainFilter;
