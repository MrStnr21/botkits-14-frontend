import { FC } from 'react';

import stylesPartnership from './partnership.module.scss';

const Partnership: FC = (): JSX.Element => {
  return (
    <div className={stylesPartnership.partnershipLayout}>
      <div className={stylesPartnership.tableContainer}>
        <p>Table</p>
      </div>
    </div>
  );
};

export default Partnership;
