import { ReactSVG } from 'react-svg';
import { forwardRef } from 'react';
import styles from './period-select-button.module.scss';
import chevronIcon from '../../../images/icon/16x16/common/chevron.svg';
import type { Option } from '../../../utils/types';

export interface IPeriodSelectButton {
  option: Option;
  isOpen: boolean;
  onClick: () => void;
  formatLabel: (label: string) => string;
}
type Ref = HTMLButtonElement;

const PeriodSelectButton = forwardRef<Ref, IPeriodSelectButton>(
  ({ option, isOpen, onClick, formatLabel }, ref) => {
    return (
      <button
        onClick={onClick}
        type="button"
        className={styles.button}
        ref={ref}
      >
        <span className={styles.text}>{formatLabel(option.label)}</span>
        <ReactSVG
          src={chevronIcon}
          className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}
        />
      </button>
    );
  }
);
export default PeriodSelectButton;
