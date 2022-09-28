import { useEffect, useState } from 'react';
import angularIcon from 'assets/angular-icon.svg';
import reactIcon from 'assets/react-icon.svg';
import vueIcon from 'assets/vue-icon.svg';
import useFilters from 'hooks/useFilters';
import { eQuery } from 'services/api/interfaces';

export type FrameworkOption = {
    label: string,
    value: eQuery,
    icon: string
}

const frameworks: FrameworkOption[] = [
    { label: 'React', value: eQuery.react, icon: reactIcon },
    { label: 'Angular', value: eQuery.angular, icon: angularIcon },
    { label: 'Vuejs', value: eQuery.vue, icon: vueIcon },
];

const useFramework = () => {
    const { filtersState, setFiltersState } = useFilters();
    const [isOpen, setIsOpen] = useState(false);
    const [framework, setFramework] = useState<FrameworkOption | null>(null);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const handleGetCurrentFramework = (frameworkSetted: string | null) => {
        if (frameworkSetted) {
            const found = frameworks.find(({ value }) => value === frameworkSetted)!;
            setFramework(found);
        }
    };

    const onOptionClicked = (option: FrameworkOption) => {
        if (option !== framework) {
            setFramework(option);
            setFiltersState({ ...filtersState, currentFramework: option.value });
        }
        setIsOpen(false);
    };

    useEffect(() => {
        const frameworkSetted = filtersState.currentFramework;
        handleGetCurrentFramework(frameworkSetted);
    }, [filtersState.currentFramework]);

    return {
        isOpen,
        frameworks,
        framework,
        onOptionClicked,
        toggleIsOpen,
    };
};

export default useFramework;
