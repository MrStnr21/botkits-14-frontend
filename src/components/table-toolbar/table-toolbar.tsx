/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import Papa from 'papaparse';
import style from './table-toolbar.module.scss';
import DropdownSelectorButton from '../../ui/buttons/dropdown-selector/dropdown-selector';

type TableData = {
  [key: string]: any;
};

interface IProps {
  filters?: boolean;
  tableData?: TableData[];
  selectedRows: number[];
}

const TableToolbar: FC<IProps> = ({
  filters = false,
  tableData,
  selectedRows,
}) => {
  const [open, setOpen] = useState(false);

  const handleExportClick = () => {
    if (selectedRows.length > 0) {
      const selectedData = tableData!.filter((row) =>
        selectedRows.includes(row.id)
      );
      const csvHeaders = Object.keys(selectedData[0]);
      const csvData = selectedData.map((row) => {
        return Object.values(row);
      });
      csvData.unshift(csvHeaders);
      const fileName = 'exported_data.csv';

      const csvLink = document.createElement('a');
      csvLink.href = URL.createObjectURL(
        new Blob([Papa.unparse(csvData)], { type: 'text/csv' })
      );
      csvLink.download = fileName;

      csvLink.click();
    }
  };

  return (
    <div className={style.toolbar}>
      {filters && (
        <div className={style.toolbar__leftSide}>
          <DropdownSelectorButton
            filterIcon
            text="Фильтры"
            onClick={() => setOpen(!open)}
            dropdown
          />
          <DropdownSelectorButton
            text="Сортировать по"
            onClick={() => setOpen(!open)}
            chevronIcon
            dropdown
          />
        </div>
      )}
      <div>
        <DropdownSelectorButton
          text="Выгрузить"
          onClick={() => handleExportClick()}
          exportIcon
        />
      </div>
    </div>
  );
};

export default TableToolbar;
