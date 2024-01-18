/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import styles from './table-switcher.module.scss';

interface IProps {
  status: boolean;
  onCellUpdate: (newValue: boolean) => void;
}

const TableSwitcher: FC<IProps> = ({ status, onCellUpdate }) => {
  const [switcher, setSwitcher] = useState(status);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const newStatus = !switcher;
    setSwitcher(newStatus);
    onCellUpdate(newStatus);
  };

  return (
    <div className={styles.switcher} onClick={handleClick}>
      <div className={switcher ? styles.switcher__on : styles.switcher__off} />
    </div>
  );
};

export default TableSwitcher;
