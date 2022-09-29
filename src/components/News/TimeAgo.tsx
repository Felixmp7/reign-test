import { formatDistance } from 'date-fns';
import clockIcon from 'assets/clock-icon.svg';
import styled from 'styled-components';

const ContainerTimeAgo = styled.span`
    display: inline-flex;
    align-items: center;
    font-size: 0.688rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #767676;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    > img {
        margin-right: .5rem;
    }
`;

type Props = {
    createdAt: Date,
    author: string,
}

const TimeAgo = ({ createdAt, author }: Props) => {
    const timeAgo = formatDistance(
        new Date(createdAt),
        new Date(),
        { addSuffix: true },
    );

    return (
        <ContainerTimeAgo>
            <img src={clockIcon} alt="clock icon" />
            {`${timeAgo} by ${author}`}
        </ContainerTimeAgo>
    );
};

export default TimeAgo;
