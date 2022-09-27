import { useContext } from 'react';
import { FiltersContext } from 'contexts/FiltersContext';

const useFiltersContext = () => {
    const context = useContext(FiltersContext);
    if (context === undefined) {
        throw new Error('useFiltersContext must be used inside a Context');
    }
    return context;
};

export default useFiltersContext;
