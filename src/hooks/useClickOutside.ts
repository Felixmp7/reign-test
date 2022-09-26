import { RefObject, useEffect } from 'react';

type CallbackHandler = (event: MouseEvent) => void;

const useClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    callback: CallbackHandler,
) => {
    const handleClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            callback(event);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};

export default useClickOutside;
