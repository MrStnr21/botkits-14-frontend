import { FC, useState } from 'react';
import styles from './switcher.module.scss';

const Switcher: FC = () => {
  const [chosen, setChosen] = useState(false);

  const handleClick = () => {
    setChosen(!chosen);
  };

  return (
    <div className={styles.switcher} onClick={handleClick}>
      <span className={!chosen ? styles.switcher__on : styles.switcher__off} />
    </div>
  );
};

export default Switcher;
