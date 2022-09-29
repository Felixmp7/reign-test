import { getStoriesLiked } from 'services/storage';
import styled from 'styled-components';
import FavoriteButton from './FavoriteButton';
import TimeAgo from './TimeAgo';

const ContainerCard = styled.div`
    width: 100%;
    height: 5.625rem;
    padding: 0 0 0 1.625rem;
    opacity: 0.8;
    border-radius: 6px;
    border: solid 1px #979797;
    background-color: #fff;
    display: flex;

    &:hover {
        opacity: 0.4;
    }

    > .card-info {
        padding: 1rem 1.625rem 1rem 0;
        width: 100%;
    }
    > .like-button-container {
        width: 4.25rem;
        background-color: rgba(96, 96, 96, 0.06);
    }
`;
const CardTitle = styled.span`
    font-size: 0.875rem;
    margin-top: .375rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.25px;
    color: ${({ theme }) => theme.brownishGray};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`;

type Props = {
    createdAt: Date,
    cardTitle: string
    author: string
    objectId: string,
    storyLink: string,
}

const Card = ({
    createdAt, cardTitle, author, objectId, storyLink,
}: Props) => {
    const storiesLiked = getStoriesLiked();

    return (
        <ContainerCard>
            <a href={storyLink} target="_blank" className="card-info" rel="noreferrer">
                <TimeAgo createdAt={createdAt} author={author} />
                <CardTitle>
                    {cardTitle || '-'}
                </CardTitle>
            </a>
            <div className="like-button-container">
                <FavoriteButton
                    objectId={objectId}
                    isAlreadyLiked={storiesLiked?.includes(objectId) || false}
                />
            </div>
        </ContainerCard>
    );
};

export default Card;
