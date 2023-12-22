/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import styles from './table-switcher.module.scss';

interface IProps {
  status: boolean;
  id: string;
}

const TableSwitcher: FC<IProps> = ({ status, id }) => {
  const [chosen, setChosen] = useState(status);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setChosen(!chosen);
  };

  return (
    <div className={styles.switcher} onClick={handleClick}>
      <div className={chosen ? styles.switcher__on : styles.switcher__off} />
    </div>
  );
};

export default TableSwitcher;
