import ChevronShape, { eChevronMode } from 'components/utils/ChevronShape';
import styled from 'styled-components';
import usePagination from './usePagination';

const ContainerPagination = styled.div<{ totalColumns: number }>`
    display: inline-grid;
    gap: .5rem;
    grid-template-columns: ${({ totalColumns }) => `repeat(calc(2 + ${totalColumns}), minmax(0, 1fr))`};
`;

type SPaginationButtonProps = {
    isActive?: boolean,
}

const PaginationButton = styled.button<SPaginationButtonProps>`
    width: 2rem;
    height: 2rem;
    padding: 0.563rem;
    border-radius: 6px;
    border: solid 1px #d9d9d9;
    background-color: ${({ isActive, theme }) => (isActive ? theme.azure : '#fff')};
    color: ${({ isActive }) => (isActive ? '#fff' : '#000000a5')};
    display: inline-grid;
    place-content: center;
    line-height: 0;

    &:hover {
        background-color: ${({ isActive }) => (isActive ? '' : '#f2f2f2')};
    }
`;

const Pagination = () => {
    const {
        page,
        currentListOfPages,
        handleSetPage,
        handleNextPage,
        handlePrevPage,
    } = usePagination();

    return (
        <ContainerPagination totalColumns={currentListOfPages.length}>
            <PaginationButton type="button" onClick={handlePrevPage}>
                <ChevronShape mode={eChevronMode.left} />
            </PaginationButton>
            {currentListOfPages.map((pageItem) => (
                <PaginationButton
                    key={pageItem}
                    type="button"
                    isActive={pageItem === page}
                    onClick={() => handleSetPage(pageItem)}
                >
                    {pageItem}
                </PaginationButton>
            ))}
            <PaginationButton type="button" onClick={handleNextPage}>
                <ChevronShape mode={eChevronMode.right} />
            </PaginationButton>
        </ContainerPagination>
    );
};

export default Pagination;
