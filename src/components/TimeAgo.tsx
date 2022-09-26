import clockIcon from 'src/assets/clock-icon.svg';
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

    > img {
        margin-right: .5rem;
    }
`;

type Props = {
    timeAgo: string
}

const TimeAgo = ({ timeAgo }: Props) => (
    <ContainerTimeAgo>
        <img src={clockIcon} alt="clock icon" />
        {`${timeAgo} by author`}
    </ContainerTimeAgo>
);

export default TimeAgo;
