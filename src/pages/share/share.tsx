import { FC } from 'react';
import {
  shareTableModalButtons,
  shareRows,
  shareCols,
  cellStyle,
  rowStyleRef,
} from './shareConfig';
import stylesShare from './share.module.scss';
import EnhancedTable from '../../components/enhanced-table/enhanced-table';
import { ppHeadCell } from '../../components/table-cells/table-cells';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import {
  promoCellStyle,
  promoRowStyleRef,
} from '../promocodes/promocodesConfig';
import { tariffsCols, tariffsRows } from './tariffsConfig';

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
      <EnhancedTable
        // при переполнении таблицы колонками задаём минимальную ширину таблицы больше минимальной
        // ширины box и получаем горизонтальный скролл внутри box
        minTableWidth="1360px"
        pagination
        check
        toolbar
        toolbarFilters
        dropdown
        columns={shareCols}
        headComponent={ppHeadCell}
        tableData={shareRows}
        rowStyle={rowStyleRef}
        cellStyle={cellStyle}
        shadow={1}
        menuOptions={shareTableModalButtons}
      />
      {/* Примеры использования таблиц в разных вариациях */}
      <div>
        <div>
          <Typography tag="h2">Тарифы</Typography>
        </div>
        <EnhancedTable
          check
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
