import { FC } from 'react';
import styles from './labeledInput.module.scss';

interface ILabeledProps {
  children?: React.ReactNode;
  title: string;
}

const LabeledInput: FC<ILabeledProps> = ({ children, title }) => {
  return (
    <div className={styles.label}>
      {title}
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default LabeledInput;
