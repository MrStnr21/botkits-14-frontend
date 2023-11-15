import React from 'react';
import styles from './checkbox.module.scss';

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  checked,
  onChange,
  value,
}) => {
  return (
    <div className={styles.checkbox}>
      <label>
        <input
          name={name}
          className={styles.checkmark}
          type="radio"
          checked={checked}
          onChange={onChange}
          value={value}
        />
        <span className={styles.cust} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
