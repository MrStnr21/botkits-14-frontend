import { FC, useState } from 'react';
import styles from './switcher.module.scss';

interface IProps {
  status: boolean;
}

const Switcher: FC<IProps> = ({ status }) => {
  const [chosen, setChosen] = useState(status);

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    setChosen(!chosen);
  };

  return (
    <div className={styles.switcher} onClick={handleClick}>
      <span className={!chosen ? styles.switcher__on : styles.switcher__off} />
    </div>
  );
};

export default Switcher;
