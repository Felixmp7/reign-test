import { useState } from 'react';
import heartIcon from 'assets/heart-icon.svg';
import heartFilledIcon from 'assets/heart-filled-icon.svg';
import styled from 'styled-components';

const LikeButton = styled.button`
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
`;

const FavoriteButton = () => {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => setIsLiked(!isLiked);

    return (
        <LikeButton type="button" onClick={toggleLike}>
            <img src={isLiked ? heartFilledIcon : heartIcon} alt="like icon" />
        </LikeButton>
    );
};

export default FavoriteButton;
