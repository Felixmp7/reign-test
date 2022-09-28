import { useState } from 'react';
import heartIcon from 'assets/heart-icon.svg';
import heartFilledIcon from 'assets/heart-filled-icon.svg';
import styled from 'styled-components';
import { getStoriesLiked, saveStoriesLiked } from 'services/storage';

const LikeButton = styled.button`
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
`;

type Props = {
    objectId: string,
    isAlreadyLiked?: boolean,
}

const FavoriteButton = ({ objectId, isAlreadyLiked }: Props) => {
    const [isLiked, setIsLiked] = useState(isAlreadyLiked);

    const toggleLike = () => {
        const currentStoriesLiked = getStoriesLiked() || [];
        if (isLiked) {
            saveStoriesLiked(currentStoriesLiked.filter((id) => id !== objectId));
        } else {
            saveStoriesLiked([...currentStoriesLiked, objectId]);
        }
        setIsLiked(!isLiked);
    };

    return (
        <LikeButton type="button" onClick={toggleLike}>
            <img src={isLiked ? heartFilledIcon : heartIcon} alt="like icon" />
        </LikeButton>
    );
};

export default FavoriteButton;
