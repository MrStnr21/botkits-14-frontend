import styles from './checkbox.module.scss';

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

// eslint-disable-next-line react/prop-types
const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className={styles.checkbox}>
      <label>
        <input
          className={styles.checkmark}
          type="radio"
          checked={checked}
          onChange={handleChange}
        />
        <span className={styles.cust} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
