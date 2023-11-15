import { FC } from 'react';
import styles from './hidden-block.module.scss';

type THiddenBlockProps = {
  children: React.ReactNode | React.ReactNode[];
  name: string;
  visible: boolean;
  toggle: () => void;
};

const HiddenBlock: FC<THiddenBlockProps> = ({
  name,
  children,
  visible,
  toggle,
}) => {
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
          onChange={toggle}
        />
      </form>
      {visible && children}
    </div>
  );
};

export default HiddenBlock;
