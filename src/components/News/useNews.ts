import { useEffect } from 'react';
import useFiltersContext from 'hooks/useFiltersContext';
import { eQuery, IGetParams } from 'services/api/interfaces';
import API from 'services/api';
import useSWR from 'swr';

const fetchNews = (currentFramework: eQuery | null, currentPage: number) => {
    const params: IGetParams = {
        page: currentPage,
        query: currentFramework || eQuery.react,
    };
    return API.getNews(params);
};

const useNews = () => {
    const { filtersState: { currentFramework, currentPage } } = useFiltersContext();
    const {
        data,
        isValidating,
        mutate,
    } = useSWR('fetchNews', () => fetchNews(currentFramework, currentPage), {
        revalidateOnFocus: false,
    });

    useEffect(() => {
        mutate();
    }, [currentFramework, currentPage, mutate]);

    return {
        news: data,
        isLoading: isValidating,
    };
};

export default useNews;
