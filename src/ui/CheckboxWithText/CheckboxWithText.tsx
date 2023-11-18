import React from 'react';
import styles from './CheckboxWithText.module.scss';

export interface CheckboxTextProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  disabled?: boolean;
}

const CheckboxWithText: React.FC<CheckboxTextProps> = ({
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

export default CheckboxWithText;
