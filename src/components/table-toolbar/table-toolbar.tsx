/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import styles from './table-toolbar.module.scss';
import DropdownSelectorButton from '../../ui/buttons/dropdown-selector/dropdown-selector';

interface IProps {
  needFilter: boolean;
}

const TableToolbar: FC<IProps> = ({ needFilter }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbar__leftSide}>
        {needFilter && (
          <DropdownSelectorButton
            filter
            text="Фильтры"
            onClick={() => setOpen(!open)}
          />
        )}
        <DropdownSelectorButton
          text="Сортировать по"
          onClick={() => setOpen(!open)}
          chev
        />
      </div>
      <div>
        <DropdownSelectorButton
          text="Выгрузить"
          onClick={() => setOpen(!open)}
          exp
        />
      </div>
    </div>
  );
};

export default TableToolbar;
