import { useEffect, useState } from 'react';
import useFilters from 'hooks/useFilters';

const totalPagesByRow = 9;

const getCurrentListOfPages = (totalPagesButton: number[], startIndex: number) => totalPagesButton.slice(startIndex, startIndex + totalPagesByRow);

const usePagination = () => {
    const { filtersState, setFiltersState } = useFilters();
    const [page, setPage] = useState(filtersState.currentPage);
    const [currentRange, setCurrentRange] = useState(0);

    const pagesList = Array.from({ length: filtersState.totalPages }, (_, index) => index + 1);

    const handleNextPage = () => {
        if (page < filtersState.totalPages) {
            if (page % totalPagesByRow === 0) setCurrentRange(currentRange + totalPagesByRow);
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        if (page !== 1) {
            if (page === currentRange + 1) setCurrentRange(currentRange - totalPagesByRow);
            setPage(page - 1);
        }
    };

    const handleSetPage = (newPage: number) => setPage(newPage);

    useEffect(() => {
        setFiltersState({ ...filtersState, currentPage: page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return {
        page,
        totalPages: filtersState.totalPages,
        currentListOfPages: getCurrentListOfPages(pagesList, currentRange),
        handleNextPage,
        handlePrevPage,
        handleSetPage,
    };
};

export default usePagination;
