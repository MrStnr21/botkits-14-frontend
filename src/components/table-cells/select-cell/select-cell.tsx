import { FC, useState } from 'react';
import Select from '../../../ui/select/select';
import { Option } from '../../../utils/types';
import style from './select-cell.module.scss';

const SelectCell: FC = () => {
  const [selectedValue, setSelectedValue] = useState<Option | string>(
    'Не активен'
  );

  const inpValues = ['Не активен', 'Активен'];

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div onClick={stopPropagation} className={style.select}>
      <Select
        options={inpValues}
        currentOption={selectedValue}
        handleSelect={(value) => setSelectedValue(value)}
      />
    </div>
  );
};

export default SelectCell;
