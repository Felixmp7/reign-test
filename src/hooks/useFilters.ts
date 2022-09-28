import { useContext } from 'react';
import { FiltersContext } from 'contexts/FiltersContext';

const useFilters = () => {
    const context = useContext(FiltersContext);
    if (context === undefined) {
        throw new Error('useFilters must be used inside a Context');
    }
    return context;
};

export default useFilters;
