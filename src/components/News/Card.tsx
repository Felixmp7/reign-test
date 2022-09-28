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
    display: block;
`;

type Props = {
    createdAt: Date,
    cardTitle: string
    author: string
    objectId: string,
}

const Card = ({
    createdAt, cardTitle, author, objectId,
}: Props) => {
    const storiesLiked = getStoriesLiked();

    return (
        <ContainerCard>
            <div className="card-info">
                <TimeAgo createdAt={createdAt} author={author} />
                <CardTitle>
                    {cardTitle || '-'}
                </CardTitle>
            </div>
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
