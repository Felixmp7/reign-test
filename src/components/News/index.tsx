import styled from 'styled-components';
import useFilters from 'hooks/useFilters';
import { getStoriesLiked } from 'services/storage';
import { breakPoints } from 'globalStyles';
import Card from './Card';
import SelectFramework from '../SelectFramework';
import useNews from './useNews';
import { NoResults, Skeleton } from './helpers';

const NewsGrid = styled.section`
    height: 400px;
    margin-top: 2.375rem;

    > ul {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding: 0;
        padding-right: .5rem;
        gap: 2.5rem;
        height: 100%;
        overflow-y: auto;
        align-content: start;

        @media (max-width: ${breakPoints.tablet}) {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
`;

const News = () => {
    const { filtersState: { isFilteredByFavs } } = useFilters();
    const { news, isLoading } = useNews();
    const currentStoriesLiked = getStoriesLiked() || [];

    const newsFiltered = isFilteredByFavs
        ? news?.hits.filter(({ objectID }) => currentStoriesLiked.includes(objectID))
        : news?.hits;

    return (
        <NewsGrid>
            {!isFilteredByFavs && <SelectFramework />}
            {(() => {
                if (isLoading) {
                    return <Skeleton />;
                }
                if (newsFiltered && newsFiltered.length > 0) {
                    return (
                        <ul>
                            {newsFiltered.map((hit) => (
                                <li key={hit.objectID}>
                                    <Card
                                        cardTitle={hit.story_title}
                                        createdAt={hit.created_at}
                                        author={hit.author}
                                        objectId={hit.objectID}
                                        storyLink={hit.story_url}
                                    />
                                </li>
                            ))}
                        </ul>
                    );
                }
                return <NoResults noResultsMessage={isFilteredByFavs ? 'No favs saved' : 'No results'} />;
            })()}
        </NewsGrid>
    );
};

export default News;
