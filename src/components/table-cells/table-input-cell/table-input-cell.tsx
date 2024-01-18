/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useRef, useState } from 'react';
import style from './table-input-cell.module.scss';
import TableInput from '../../../ui/inputs/table-input/table-input';

interface IProps {
  value: string;
  onCellUpdate: (newValue: string) => void;
}

const TableInputCell: FC<IProps> = ({ value, onCellUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onCellUpdate(e.target.value);
  };

  return (
    <div className={style.inputCell} onClick={() => setIsEditing(!isEditing)}>
      {isEditing ? (
        <TableInput
          onChange={handleChange}
          value={value}
          inputRef={inputRef}
          handleBlur={handleBlur}
        />
      ) : (
        <div onClick={handleClick}>{value}</div>
      )}
    </div>
  );
};
export default TableInputCell;
