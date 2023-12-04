/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useRef, useState } from 'react';
import Select from '../../../ui/select/select';
import { Option } from '../../../utils/types';

const SelectCell: FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Option | string>(
    'Не активен'
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const inpValues = ['Не активен', 'Активен'];

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

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
