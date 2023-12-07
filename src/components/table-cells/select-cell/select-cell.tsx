import { FC, useState } from 'react';
import Select from '../../../ui/select/select';
import { Option } from '../../../utils/types';

const SelectCell: FC = () => {
  const [selectedValue, setSelectedValue] = useState<Option | string>(
    'Не активен'
  );

  const inpValues = ['Не активен', 'Активен'];

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div onClick={stopPropagation}>
      <Select
        options={inpValues}
        currentOption={selectedValue}
        handleSelect={(value) => setSelectedValue(value)}
        placeholder="Список рассылки"
      />
    </div>
  );
};

export default SelectCell;
