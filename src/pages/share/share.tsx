/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import Typography from '../../ui/typography/typography';
import TableComponent from '../../components/table-component/table-component';
import { columns } from '../../utils/shareTable';
import style from './share.module.scss';

const Share: FC = (): JSX.Element => {
  return (
    <div className={style.container}>
      <Typography tag="h2" fontFamily="secondary">
        Общий доступ
      </Typography>
      {/* <TableComponent columns={columns} /> */}
    </div>
  );
};

export default Share;
