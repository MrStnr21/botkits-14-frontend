/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './editable-input-cell.module.scss';
import TableInput from '../../../ui/inputs/table-input/table-input';

interface IProps {
  value: string;
}
const EditableInputCell: FC<IProps> = ({ value }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inpValue, setInpValue] = useState(value);
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
    setInpValue(e.target.value);
  };

  return (
    <div className={styles.inputCell}>
      {isEditing ? (
        <TableInput
          onChange={handleChange}
          value={inpValue}
          inputRef={inputRef}
          handleBlur={handleBlur}
        />
      ) : (
        <span onClick={handleClick}>{inpValue}</span>
      )}
    </div>
  );
};
export default EditableInputCell;
