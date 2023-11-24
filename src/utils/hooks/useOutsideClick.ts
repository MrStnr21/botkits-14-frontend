import { RefObject, useEffect } from 'react';

export interface IProps {
  /** Реф элемента, который будет закрыт по клику снаружи. Например, выпадающее меню */
  elemRef: RefObject<HTMLDivElement> | null;
  /** Элемент, на который вешается слушатель события (в общем случае - document ) */
  element: Document | Element;
  /** Функция, котороая срабтоает при клике снаружи от элемента с рефом  elemRef */
  callback: () => void;
  /** Реф элемента, по клику на который не должно происходить закрытие.
   * Например - кнопка для выпадающего меню со своим обработчиком */
  handlerRef?: RefObject<HTMLDivElement> | RefObject<HTMLButtonElement>;
}

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
