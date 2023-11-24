import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './mobile-table.module.scss';
import { rows } from '../../../../utils/mailingTable';
import MobileTableRow from './mobile-table-row/mobile-table-row';
import Button from '../../../../ui/buttons/button/button';

type TMobileTable = {
  data: (typeof rows)[0][];
  children?: React.ReactNode;
};

const MobileTable: FC<TMobileTable> = ({ data }) => {
  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        {data.map((item) => (
          <MobileTableRow {...item} />
        ))}
      </ul>
      <Button
        variant="default"
        size="small"
        color="green"
        buttonHtmlType="button"
      >
        <Link to="create" className={styles.link}>
          Создать рассылку
        </Link>
      </Button>
    </div>
  );
};

export default MobileTable;
