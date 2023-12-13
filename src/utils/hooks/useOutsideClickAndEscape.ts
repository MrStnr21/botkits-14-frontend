import { RefObject } from 'react';
import useEscapeKey from './useEscapeKey';
import useOutsideClick from './useOutsideClick';

/**
 * Объекдинение хуков `useOutsideClick` и `useEscapeKey`
 */
const useOutsideClickAndEscape = (
  ref: RefObject<HTMLDivElement>,
  element: Document | Element,
  callback: () => void,
  handlerRef?: RefObject<HTMLDivElement> | RefObject<HTMLButtonElement>
) => {
  useOutsideClick(ref, element, callback, handlerRef);
  useEscapeKey(callback);
};

export default useOutsideClickAndEscape;
