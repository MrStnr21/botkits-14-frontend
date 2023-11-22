import { RefObject, useEffect } from 'react';

const useOutsideClick = (
  elemRef: RefObject<HTMLDivElement> | null,
  element: Document | Element,
  callback: () => void,
  handlerRef?: RefObject<HTMLDivElement> | RefObject<HTMLButtonElement>
) => {
  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        elemRef &&
        elemRef.current &&
        !elemRef.current.contains(event.target as Node) &&
        // если нет хэндлера, по которому происходит toggle элемента либо кликнули не на него
        (!handlerRef ||
          (handlerRef &&
            handlerRef.current &&
            !handlerRef.current.contains(event.target as Node)))
      ) {
        callback();
      }
    };

    element.addEventListener('mousedown', handleClickOutside);

    return () => {
      element.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);
};

export default useOutsideClick;
