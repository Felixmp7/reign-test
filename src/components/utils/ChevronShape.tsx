import styled from 'styled-components';

export enum eChevronMode {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right',
}

type Props = {
    mode: eChevronMode
}

const getChevronProperties = (currentPosition: eChevronMode) => {
    const position = {
        [eChevronMode.up]: {
            orientation: '1.5px 1.5px 0 0',
            margin: '5px 0 0 0',
        },
        [eChevronMode.down]: {
            orientation: '0 0 1.5px 1.5px',
            margin: '0 0 5px 0',
        },
        [eChevronMode.left]: {
            orientation: '1.5px 0 0 1.5px',
            margin: '0 0 0 5px',
        },
        [eChevronMode.right]: {
            orientation: '0 1.5px 1.5px 0',
            margin: '0 5px 0 0',
        },
    };

    return position[currentPosition];
};

const ChevronStyled = styled.div<Props>`
        border: solid black;
        display: inline-block;
        border-color: #2e2e2e;
        padding: 0.219rem;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        border-width: ${({ mode }) => getChevronProperties(mode).orientation};
        margin: ${({ mode }) => getChevronProperties(mode).margin};
`;

const ChevronShape = ({ mode }: Props) => (
    <ChevronStyled mode={mode} />
);

export default ChevronShape;
