import styled from 'styled-components';

const Label = styled.span`
    margin-left: .813rem;
`;

type Props = {
    icon: string,
    alt: string,
    label: string
}

const Option = ({ icon, alt, label }: Props) => (
    <>
        <img src={icon} alt={`${alt} icon`} width={26} height={26} />
        <Label>{label}</Label>
    </>
);

export default Option;
