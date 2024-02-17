/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useRef, useState } from 'react';
import style from './table-input-cell.module.scss';
import TableInput from '../../../ui/inputs/table-input/table-input';
import { TableData } from '../../enhanced-table/enhanced-table';

interface IProps {
  value: string;
  onCellUpdate: (newValue: string) => void;
  column?: string;
  TData?: TableData[];
}

const TableInputCell: FC<IProps> = ({ value, onCellUpdate, column, TData }) => {
  const [inputValue, setInputValue] = useState(value);
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
    onCellUpdate(inputValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setInputValue(e.target.value);
  };

  return (
    <div className={style.inputCell} onClick={() => setIsEditing(!isEditing)}>
      {isEditing ? (
        <TableInput
          data={TData}
          column={column}
          onChange={handleChange}
          value={inputValue}
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
