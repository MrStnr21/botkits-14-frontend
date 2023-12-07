/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import style from './table-toolbar.module.scss';
import DropdownSelectorButton from '../../ui/buttons/dropdown-selector/dropdown-selector';

interface IProps {
  needFilter: boolean;
}

const TableToolbar: FC<IProps> = ({ needFilter }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.toolbar}>
      <div className={style.toolbar__leftSide}>
        {needFilter && (
          <DropdownSelectorButton
            filterIcon
            text="Фильтры"
            onClick={() => setOpen(!open)}
          />
        )}
        <DropdownSelectorButton
          text="Сортировать по"
          onClick={() => setOpen(!open)}
          chevronIcon
        />
      </div>
      <div>
        <DropdownSelectorButton
          text="Выгрузить"
          onClick={() => setOpen(!open)}
          exportIcon
        />
      </div>
    </div>
  );
};

export default TableToolbar;
