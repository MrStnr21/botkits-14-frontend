/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useRef, useState } from 'react';
import style from './table-input-cell.module.scss';
import TableInput from '../../../ui/inputs/table-input/table-input';

interface IProps {
  value: string;
  onCellUpdate: (newValue: any) => void;
}

const TableInputCell: FC<IProps> = ({ value, onCellUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inpValue, setInpValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsEditing(!isEditing);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEditing(false);
    onCellUpdate(e.target.value);
    console.log(`New Value: ${e.target.value}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setInpValue(e.target.value);
  };

  return (
    <div className={style.inputCell} onClick={() => setIsEditing(!isEditing)}>
      {isEditing ? (
        <TableInput
          onChange={handleChange}
          value={inpValue}
          inputRef={inputRef}
          handleBlur={handleBlur}
        />
      ) : (
        <div onClick={handleClick}>{inpValue}</div>
      )}
    </div>
  );
};
export default TableInputCell;
