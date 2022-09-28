import { useEffect, useMemo, useState } from 'react';
import { eQuery } from 'services/api/interfaces';
import { getFramework, saveFramework } from 'services/storage';
import { FiltersState } from './FiltersContext';

const useFiltersContext = () => {
    const [filtersState, setFiltersState] = useState<FiltersState>({
        currentFramework: getFramework() as eQuery,
        currentPage: 1,
        totalPages: 0,
        isFilteredByFavs: false,
    });

    const values = useMemo(() => ({ filtersState, setFiltersState }), [filtersState]);

    useEffect(() => {
        saveFramework(filtersState.currentFramework!);
    }, [filtersState.currentFramework]);

    return { contextValues: values };
};

export default useFiltersContext;
