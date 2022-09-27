import styled from 'styled-components';
import Card from './Card';
import SelectFramework from '../SelectFramework';
import useNews from './useNews';

const NewsGrid = styled.ul`
    margin-top: 2.375rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0;
    gap: 2.5rem;
`;

const News = () => {
    const { news } = useNews();

    return (
        <section>
            <SelectFramework />
            {news
                ? (
                    <NewsGrid>
                        {news.hits.map((hit, index) => (
                            <li style={{ listStyle: 'none' }} key={index}>
                                <Card
                                    cardTitle={hit.story_title}
                                    createdAt={hit.created_at}
                                    author={hit.author}
                                />
                            </li>
                        ))}
                    </NewsGrid>
                ) : 'Loading'}
        </section>
    );
};

export default News;
