import React from 'react';
import styles from './checkbox-done.module.scss';

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  disabled?: boolean;
}

const CheckboxDone: React.FC<CheckboxProps> = ({
  name,
  label,
  checked,
  onChange,
  value,
  disabled = false,
}) => {
  return (
    <div className={styles.checkbox}>
      <label>
        <input
          name={name}
          className={
            checked === true ? styles.customСheckboxDone : styles.customСheckbox
          }
          type="checkbox"
          checked={checked}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
        <span className={styles.cust} />
        {label}
      </label>
    </div>
  );
};

export default CheckboxDone;
