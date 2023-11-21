import { RefObject } from 'react';
import useEscapeKey from './useEscapeKey';
import useOutsideClick from './useOutsideClick';

const useOutsideClickAndEscape = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useOutsideClick(ref, callback);
  useEscapeKey(callback);
};

export default useOutsideClickAndEscape;
