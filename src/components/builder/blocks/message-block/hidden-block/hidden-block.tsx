import { FC, useState } from 'react';
import styles from './hidden-block.module.scss';

type THiddenBlockProps = {
  children: React.ReactNode | React.ReactNode[];
  name: string;
};

const HiddenBlock: FC<THiddenBlockProps> = ({ name, children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles['hidden-content']}>
      <form className={styles['hiddent-form']}>
        <label className={styles.label} htmlFor={name}>
          {name}
        </label>
        <input
          name={name}
          type="checkbox"
          checked={visible}
          onChange={() => {
            setVisible(!visible);
          }}
        />
      </form>
      {visible && children}
    </div>
  );
};

export default HiddenBlock;
