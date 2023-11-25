import { FC, useRef, useState } from 'react';
import useOutsideClickAndEscape from '../../../utils/hooks/useOutsideClickAndEscape';
import styles from './time-select.module.scss';
import MenuTime from '../../../ui/menus/menu-time/menu-time';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';

type TTimeSelectProps = {
  value: string;
  onDecrease: () => void;
  onIncrease: () => void;
  saveFunction: () => void;
  clearFunction: () => void;
};

const TimeSelect: FC<TTimeSelectProps> = ({
  value,
  onDecrease,
  onIncrease,
  saveFunction,
  clearFunction,
}) => {
  const [isOpen, setIsOpen] = useState(false);

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
    >
      <span onClick={onDecrease} className={styles.chevronLeft}>
        <ChevronIcon width={16} height={16} color="#060C23" />
      </span>
      <span>{value}</span>
      <span onClick={onIncrease} className={styles.chevronRight}>
        <ChevronIcon width={16} height={16} color="#060C23" />
      </span>
      {isOpen && (
        <div ref={menuRef} className={styles.menu}>
          <MenuTime saveFunction={saveFunction} clearFunction={clearFunction} />
        </div>
      )}
    </button>
  );
};

export default TimeSelect;
