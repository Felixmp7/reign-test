import styled from 'styled-components';
import useFiltersContext from 'hooks/useFiltersContext';
import { getStoriesLiked } from 'services/storage';
import Card from './Card';
import SelectFramework from '../SelectFramework';
import useNews from './useNews';

const NewsGrid = styled.ul`
    margin-top: 2.375rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0;
    padding-right: .5rem;
    gap: 2.5rem;
    height: 400px;
    overflow-y: auto;
`;

const News = () => {
    const { filtersState: { isFilteredByFavs } } = useFiltersContext();
    const currentStoriesLiked = getStoriesLiked() || [];

    const { news, isLoading } = useNews();

    const newsFiltered = isFilteredByFavs
        ? news?.hits.filter(({ objectID }) => currentStoriesLiked.includes(objectID))
        : news?.hits;

    return (
        <section>
            {!isFilteredByFavs && <SelectFramework />}
            {(() => {
                if (isLoading) {
                    return 'Loading...';
                }
                if (newsFiltered && newsFiltered.length > 0) {
                    return (
                        <NewsGrid>
                            {newsFiltered.map((hit) => (
                                <li style={{ listStyle: 'none' }} key={hit.objectID}>
                                    <Card
                                        cardTitle={hit.story_title}
                                        createdAt={hit.created_at}
                                        author={hit.author}
                                        objectId={hit.objectID}
                                    />
                                </li>
                            ))}
                        </NewsGrid>
                    );
                }
                return <>No Favs added</>;
            })()}
        </section>
    );
};

export default News;
