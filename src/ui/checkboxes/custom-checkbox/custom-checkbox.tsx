import { FC } from 'react';
import styles from './custom-checkbox.module.scss';

interface IProps {
  text: string;
  isChecked: boolean;
}

const CustomCheckbox: FC<IProps> = ({ text, isChecked }) => {
  return (
    <label className={styles.customCheckbox}>
      <input type="checkbox" className={styles.customCheckbox__checkbox} />
      <span
        className={
          !isChecked
            ? `${styles.customCheckbox__text}`
            : `${styles.customCheckbox__checkedText}`
        }
      >
        {text}
      </span>
    </label>
  );
};

export default CustomCheckbox;
