import { FC } from 'react';

import stylesShare from './share.module.scss';
import TableComponent from '../../components/table-component/table-component';
import {
  shareRows,
  shareCols,
  cellStyle,
  rowStyleRef,
} from '../../utils/shareTable';
import { ppHeadCell } from '../../components/table-cells/table-cells';

const Share: FC = (): JSX.Element => {
  return (
    <div className={stylesShare.title}>
      <TableComponent
        pagination
        check
        columns={shareCols}
        headComponent={ppHeadCell}
        tableData={shareRows}
        rowStyle={rowStyleRef}
        cellStyle={cellStyle}
      />
    </div>
  );
};

export default Share;
