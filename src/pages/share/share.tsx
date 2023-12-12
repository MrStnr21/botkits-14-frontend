import { FC, useState } from 'react';
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
  promoColumns,
  promoDropdownValues,
  promoHeaderTitle,
  promoRowStyleRef,
  promoRows,
  promoTableModalButtons,
} from './promocodesConfig';
import { tariffsCols, tariffsRows } from './tariffsConfig';

const Share: FC = (): JSX.Element => {
  // логика для фильтрации отображаемых строк в таблице с промокодами,
  // при создании страницы promocodes вынести в компонент страницы
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
          <Typography tag="h2">Созданные промокоды</Typography>
        </div>
        <div className={stylesShare.promocodeTable}>
          <EnhancedTable
            check
            header
            dropdown
            columns={promoColumns}
            headComponent={ppHeadCell}
            tableData={renderFilteredRows()}
            rowStyle={promoRowStyleRef}
            cellStyle={promoCellStyle}
            shadow={0}
            onFilterChange={handleFilterChange}
            menuOptions={promoTableModalButtons}
            tableHeaderTitle={promoHeaderTitle}
            headerOptions={promoDropdownValues}
          />
        </div>
      </div>
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
