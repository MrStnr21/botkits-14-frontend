import React, { FC, useRef, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import useOutsideClickAndEscape from '../../../utils/hooks/useOutsideClickAndEscape';
import styles from './time-select.module.scss';
import MenuTime from '../../../ui/menus/menu-time/menu-time';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';
import ModalPopup from '../../popups/modal-popup/modal-popup';

type TTimeSelectProps = {
  value: string;
  onDecrease: () => void;
  onIncrease: () => void;
  saveFunction: () => void;
  clearFunction: () => void;
  style?: {
    [key: string]: string;
  };
  isSelect?: boolean;
};

const TimeSelect: FC<TTimeSelectProps> = ({
  value,
  onDecrease,
  onIncrease,
  saveFunction,
  clearFunction,
  style,
  isSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 860px)');

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClickAndEscape(
    menuRef,
    document,
    () => setIsOpen(false),
    buttonRef
  );

  return (
    <button
      ref={buttonRef}
      onClick={() => setIsOpen(!isOpen)}
      type="button"
      className={styles.container}
      style={style}
    >
      <span onClick={onDecrease} className={styles.chevronLeft}>
        <ChevronIcon strokeWidth={1.5} width={16} height={16} color="#060C23" />
      </span>
      <span>{value}</span>
      <span onClick={onIncrease} className={styles.chevronRight}>
        <ChevronIcon strokeWidth={1.5} width={16} height={16} color="#060C23" />
      </span>
      {isOpen && !isMobile && isSelect && (
        <div ref={menuRef} className={styles.menu}>
          <MenuTime saveFunction={saveFunction} clearFunction={clearFunction} />
        </div>
      )}
      {isOpen && isMobile && isSelect && (
        <ModalPopup onClick={() => setIsOpen(false)} closeIcon={false}>
          <MenuTime saveFunction={saveFunction} clearFunction={clearFunction} />
        </ModalPopup>
      )}
    </button>
  );
};

export default TimeSelect;
