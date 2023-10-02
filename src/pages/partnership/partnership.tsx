import { FC } from 'react';

import stylesPartnership from './partnership.module.scss';
import PartnershipTable from '../../components/partnership-table/partnership-table';

const Partnership: FC = (): JSX.Element => {
  return (
    <div className={stylesPartnership.partnershipLayout}>
      <div className={stylesPartnership.tableContainer}>
        <PartnershipTable />
      </div>
    </div>
  );
};

export default Partnership;
