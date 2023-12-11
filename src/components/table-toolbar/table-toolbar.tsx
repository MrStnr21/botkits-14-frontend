/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import style from './table-toolbar.module.scss';
import DropdownSelectorButton from '../../ui/buttons/dropdown-selector/dropdown-selector';

interface IProps {
  filters?: boolean;
}

const TableToolbar: FC<IProps> = ({ filters = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.toolbar}>
      {filters && (
        <div className={style.toolbar__leftSide}>
          <DropdownSelectorButton
            filterIcon
            text="Фильтры"
            onClick={() => setOpen(!open)}
          />
          <DropdownSelectorButton
            text="Сортировать по"
            onClick={() => setOpen(!open)}
            chevronIcon
          />
        </div>
      )}
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
