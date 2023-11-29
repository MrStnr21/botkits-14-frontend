import { FC } from 'react';
import styles from './dropdown-selector.module.scss';
import ExportIcon from '../../../components/icons/Export/ExportIcon';
import DoubleChevronIcon from '../../../components/icons/DoubleChevron/DoubleChevron';
import NewFilterIcon from '../../../components/icons/NewFilterIcon/NewFilterIcon';

export interface IProps {
  onClick: () => void;
  text: string;
  open?: boolean;
  exp?: boolean;
  chev?: boolean;
  filter?: boolean;
}

const DropdownSelectorButton: FC<IProps> = ({
  onClick,
  text,
  open,
  exp,
  chev,
  filter,
}) => {
  return (
    <button onClick={onClick} type="button" className={styles.button}>
      <span className={styles.text}>{text}</span>
      <div className={`${styles.icon} ${open ? styles.rotated : ''}`}>
        {exp && <ExportIcon width={24} height={24} />}
        {chev && <DoubleChevronIcon width={24} height={24} />}
        {filter && <NewFilterIcon width={24} height={24} />}
      </div>
    </button>
  );
};

export default DropdownSelectorButton;
