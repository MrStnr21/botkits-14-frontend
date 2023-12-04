/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './editable-input-cell.module.scss';
import TableInput from '../../../ui/inputs/table-input/table-input';

interface IProps {
  value: string;
  onChange?: any;
}
const EditableInputCell: FC<IProps> = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inpValue, setValue] = useState('промокод');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setIsEditing(!isEditing);
  };

  const handleBlur = () => {
    setIsEditing(false);
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onChange(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className={styles.inputCell}>
      {isEditing ? (
        <TableInput onChange={handleChange} value={value} inputRef={inputRef} />
      ) : (
        <span onClick={handleClick}>{value}</span>
      )}
    </div>
  );
};
export default EditableInputCell;
