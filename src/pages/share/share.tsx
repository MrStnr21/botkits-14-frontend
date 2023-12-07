import { FC, useState } from 'react';

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
import { tariffsCols, tariffsRows } from '../../utils/tablesData/tariffTable';

const Share: FC = (): JSX.Element => {
  const [filterValue, setFilterValue] = useState<string>('all');
  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  const renderFilteredRows = () => {
    switch (filterValue) {
      case 'all':
        return promoRows;
      case 'inactive':
        return promoRows.filter((row) => row.status === false);
      case 'active':
        return promoRows.filter((row) => row.status === true);
      default:
        return promoRows;
    }
  };
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
      {/* Удалить перед мёрджем весь код ниже */}
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
            tableData={renderFilteredRows()}
            rowStyle={promoRowStyleRef}
            cellStyle={promoCellStyle}
            shadow={0}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
      <div>
        <div>
          <Typography tag="h2">Тарифы</Typography>
        </div>
        <TableComponent
          check
          minTableWidth="1410px"
          columns={tariffsCols}
          headComponent={ppHeadCell}
          tableData={tariffsRows}
          rowStyle={promoRowStyleRef}
          cellStyle={promoCellStyle}
          shadow={1}
          pagination
        />
      </div>
    </div>
  );
};

export default Share;
