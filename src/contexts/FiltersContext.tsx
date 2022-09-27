import { eQuery } from 'services/api/interfaces';
import { getFramework, saveFramework } from 'services/storage';
import {
    createContext, Dispatch, useMemo, useState, useEffect,
} from 'react';

export type FiltersState = {
    isFilteredByFavs: boolean,
    currentFramework: eQuery | null,
    currentPage: number,
}

export interface FiltersContextProps {
    filtersState: FiltersState;
    setFiltersState: Dispatch<FiltersState>;
}

export const FiltersContext = createContext<FiltersContextProps>({
    filtersState: {
        currentFramework: null,
        currentPage: 0,
        isFilteredByFavs: false,
    },
    setFiltersState: () => null,
});

type Props = {
    children: React.ReactNode
};

const FiltersContextProvider = ({ children }: Props) => {
    const [filtersState, setFiltersState] = useState<FiltersState>({
        currentFramework: getFramework() as eQuery,
        currentPage: 0,
        isFilteredByFavs: false,
    });

    const values = useMemo(() => ({ filtersState, setFiltersState }), [filtersState]);

    useEffect(() => {
        saveFramework(filtersState.currentFramework!);
    }, [filtersState.currentFramework]);

    return (
        <FiltersContext.Provider value={values}>
            {children}
        </FiltersContext.Provider>
    );
};

export default FiltersContextProvider;
