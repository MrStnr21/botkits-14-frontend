import { FC } from 'react';

import stylesShare from './share.module.scss';
import TableComponent from '../../components/table-component/table-component';
import {
  shareRows,
  shareCols,
  cellStyle,
  rowStyleRef,
} from '../../utils/tablesData/shareTable';
import { ppHeadCell } from '../../components/table-cells/table-cells';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import {
  promoCellStyle,
  promoColumns,
  promoRowStyleRef,
  promoRows,
} from '../../utils/tablesData/promocodesTable';

const Share: FC = (): JSX.Element => {
  return (
    <div className={stylesShare.share}>
      <div className={stylesShare.share__header}>
        <div>
          <Typography
            tag="h2"
            fontFamily="secondary"
            className={stylesShare.share__title}
          >
            Общий доступ
          </Typography>
        </div>
        <div className={stylesShare.share__buttonWrapper}>
          <Button
            variant="default"
            size="small"
            color="green"
            buttonHtmlType="submit"
          >
            Добавить
          </Button>
        </div>
      </div>
      <TableComponent
        pagination
        check
        toolbar
        columns={shareCols}
        headComponent={ppHeadCell}
        tableData={shareRows}
        rowStyle={rowStyleRef}
        cellStyle={cellStyle}
        shadow={1}
      />
      <div>
        <div>
          <Typography tag="h2">Созданные промокоды</Typography>
        </div>
        <div className={stylesShare.promocodeTable}>
          <TableComponent
            check
            header
            columns={promoColumns}
            headComponent={ppHeadCell}
            tableData={promoRows}
            rowStyle={promoRowStyleRef}
            cellStyle={promoCellStyle}
            shadow={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Share;
