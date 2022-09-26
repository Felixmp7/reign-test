import { useRef, useState } from 'react';
import styled from 'styled-components';
import useClickOutside from 'src/hooks/useClickOutside';
import angularIcon from 'src/assets/angular-icon.svg';
import reactIcon from 'src/assets/react-icon.svg';
import vueIcon from 'src/assets/vue-icon.svg';
import Option from './Option';

const DropDownContainer = styled.div`
    width: 15rem;
`;

const DropDownButton = styled.button`
    width: 100%;
    height: 2rem;
    padding: 0.313rem 0.75rem 0.313rem 0.75rem;
    border-radius: 4px;
    line-height: 0;
    border: solid 1px #2e2e2e;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    > .framework-selected {
        display: flex;
        align-items: center;
    }
`;

const DropDownIndicatorContainer = styled.div`
    width: 0.875rem;
    height: 0.875rem;
    padding: 0.25rem 0.125rem 0.188rem;
    display: grid;
    place-content: center;

    > .indicator {
        border: solid black;
        border-width: 0px 0px 1.5px 1.5px;
        display: inline-block;
        border-color: #2e2e2e;
        padding: 0.219rem;
        margin-bottom: 5px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
`;

const DropDownList = styled.ul`
    padding: 0;
    width: 100%;
    box-shadow: 0 2px 2px 0 #dad8d8;
    background-color: #fff;
    cursor: pointer;
`;

const ListItem = styled.li`
    list-style: none;
    width: 100%;
    height: 2.875rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0.375rem 5.563rem 0.625rem 0.688rem;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: #343434;

    &:hover {
        background-color: #eaeaea33;
    }
`;

type Option = {
    label: string,
    value: string,
    icon: string
}

const options: Option[] = [
    { label: 'React', value: 'reactjs', icon: reactIcon },
    { label: 'Angular', value: 'angular', icon: angularIcon },
    { label: 'Vuejs', value: 'vuejs', icon: vueIcon },
];

const SelectFramework = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [framework, setFramework] = useState<Option | null>(null);
    const ref = useRef(null);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const onOptionClicked = (option: Option) => {
        setFramework(option);
        setIsOpen(false);
    };

    useClickOutside(ref, () => setIsOpen(false));

    return (
        <DropDownContainer ref={ref}>
            <DropDownButton type="button" onClick={toggleIsOpen}>
                {framework ? (
                    <div className="framework-selected">
                        <Option
                            icon={framework.icon}
                            alt={framework.value}
                            label={framework.label}
                        />
                    </div>
                ) : 'Select your news'}
                <DropDownIndicatorContainer>
                    <div className="indicator" />
                </DropDownIndicatorContainer>
            </DropDownButton>
            {isOpen && (
                <DropDownList>
                    {options.map((option, index) => (
                        <ListItem key={index} onClick={() => onOptionClicked(option)}>
                            <Option icon={option.icon} alt={option.value} label={option.label} />
                        </ListItem>
                    ))}
                </DropDownList>
            )}
        </DropDownContainer>
    );
};

export default SelectFramework;
