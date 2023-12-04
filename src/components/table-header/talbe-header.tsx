import { FC } from 'react';
import Typography from '../../ui/typography/typography';
import styles from './table-header.module.scss';
import ChevronIcon from '../icons/Chevron/ChevronIcon';

interface IProps {
  title: string;
}

const EnhancedTableHeader: FC<IProps> = (props) => {
  const { title } = props;

  return (
    <div className={styles.div}>
      <Typography tag="h3">{title}</Typography>
      <button type="button" className={styles.button}>
        Все <ChevronIcon color="#8392AB" width={26} height={26} />
      </button>
    </div>
  );
};

export default EnhancedTableHeader;
