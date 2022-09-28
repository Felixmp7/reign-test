import { eQuery } from 'services/api/interfaces';
import { createContext, Dispatch } from 'react';
import useFiltersContext from './useFiltersContext';

export type FiltersState = {
    isFilteredByFavs: boolean,
    currentFramework: eQuery | null,
    currentPage: number,
    totalPages: number,
}

export interface FiltersContextProps {
    filtersState: FiltersState;
    setFiltersState: Dispatch<FiltersState>;
}

export const FiltersContext = createContext<FiltersContextProps>({
    filtersState: {
        currentFramework: null,
        currentPage: 1,
        totalPages: 0,
        isFilteredByFavs: false,
    },
    setFiltersState: () => null,
});

type Props = {
    children: React.ReactNode
};

const FiltersContextProvider = ({ children }: Props) => {
    const { contextValues } = useFiltersContext();

    return (
        <FiltersContext.Provider value={contextValues}>
            {children}
        </FiltersContext.Provider>
    );
};

export default FiltersContextProvider;
