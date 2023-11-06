import { FC } from 'react';
import styles from './labeledInput.module.scss';

interface ILabeledProps {
  children?: React.ReactNode;
  title: string;
  extraClass?: string;
}

const LabeledInput: FC<ILabeledProps> = ({ children, title, extraClass }) => {
  return (
    <div className={`${styles.label} ${extraClass || ''}`}>
      {title}
      <div>{children}</div>
    </div>
  );
};

export default LabeledInput;
