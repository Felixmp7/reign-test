import { useEffect } from 'react';
import useFilters from 'hooks/useFilters';
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
    const { filtersState, setFiltersState } = useFilters();

    const handleFetchNews = async () => {
        const news = await fetchNews(filtersState.currentFramework, filtersState.currentPage);
        setFiltersState({ ...filtersState, totalPages: news.nbPages });
        return news;
    };

    const { data, isValidating, mutate } = useSWR('fetchNews', handleFetchNews, {
        revalidateOnFocus: false,
    });

    useEffect(() => {
        mutate();
    }, [filtersState.currentFramework, filtersState.currentPage, mutate]);

    return {
        news: data,
        isLoading: isValidating,
    };
};

export default useNews;
