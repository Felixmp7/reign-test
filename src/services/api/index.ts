import network from '../network';
import { IGetParams, News } from './interfaces';

const API = {
    getNews: (params: IGetParams) => network.get<News>('search_by_date', { params })
        .then(({ data }) => data),
};

export default API;
