import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
    0% {
        background-color: #d4dfe5;
    }
    100% {
        background-color: #f0f3f5;
    }
`;

const NewsGridSkeleton = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0;
    padding-right: .5rem;
    gap: 2.5rem;
    height: 100%;
    overflow-y: auto;

    > li {
        animation: ${pulseAnimation} 1s linear infinite alternate;
        width: 100%;
        height: 5.625rem;
        padding: 0 0 0 1.625rem;
        border-radius: 6px;
    }
`;

export const Skeleton = () => {
    const skeletonItems = Array.from({ length: 8 }, (_, i) => i);

    return (
        <NewsGridSkeleton>
            {skeletonItems.map((item) => <li key={item} />)}
        </NewsGridSkeleton>
    );
};

const NoResultsContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #d4dfe5;
    display: grid;
    place-content: center;
    color: #000000a5;
`;

type NoResultsProps = {
    noResultsMessage: string,
}

export const NoResults = ({ noResultsMessage }: NoResultsProps) => (
    <NoResultsContainer>
        <span>{noResultsMessage}</span>
    </NoResultsContainer>
);
