import { FC } from 'react';
import styles from './table-switcher.module.scss';

interface IProps {
  status: boolean;
  onCellUpdate: (newValue: boolean) => void;
}

const TableSwitcher: FC<IProps> = ({ status, onCellUpdate }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const newStatus = !status;
    onCellUpdate(newStatus);
  };

  return (
    <div className={styles.switcher} onClick={handleClick}>
      <div className={status ? styles.switcher__on : styles.switcher__off} />
    </div>
  );
};

export default TableSwitcher;
