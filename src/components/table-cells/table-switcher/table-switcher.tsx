/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import styles from './table-switcher.module.scss';

interface IProps {
  status: boolean;
  cellKey: string;
  onCellUpdate: (newValue: any) => void;
}

const TableSwitcher: FC<IProps> = ({ status, cellKey, onCellUpdate }) => {
  const [chosen, setChosen] = useState(status);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const newStatus = !chosen;
    console.log('New Status:', newStatus);
    setChosen(newStatus);
    onCellUpdate(newStatus);
  };

  return (
    <div className={styles.switcher} onClick={handleClick}>
      <div className={chosen ? styles.switcher__on : styles.switcher__off} />
    </div>
  );
};

export default TableSwitcher;
