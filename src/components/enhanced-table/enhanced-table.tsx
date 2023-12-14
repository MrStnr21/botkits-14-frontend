/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, ReactNode, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { v4 as uuidv4 } from 'uuid';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { SxProps } from '@mui/system';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Box, Checkbox } from '@mui/material';
import Typography from '../../ui/typography/typography';
import TableToolbar from '../table-toolbar/table-toolbar';
import EnhancedTableHeader from '../table-header/table-header';
import {
  headCheckBoxStyles,
  paginationStyles,
  paperStyles,
  checkBoxStyle,
  boxStyle,
  tableContainerStyles,
} from './tableStyles';
import CustomPagination from './custom-pagination/custom-pagination';
import styles from './enhanced-table.module.scss';
import TableMenuButton from '../table-menu-button/table-menu-button';

type Columns = {
  id?: number;
  key: string;
  label: ReactNode;
  colStyle?: SxProps;
  cellComponent?: (data: any, id: string) => ReactNode;
};

type TableData = {
  [key: string]: any;
};

type Props = {
  columns: Columns[];
  tableData: TableData[];
  headComponent: (data: any) => ReactNode;
  headStyle?: SxProps;
  rowStyle?: SxProps;
  cellStyle?: SxProps;
  // нужна ли пагинация в таблице
  pagination?: boolean;
  // подключены ли чекбоксы к строке
  check?: boolean;
  // наличие нопок фильтров и выгрузки над таблицей
  toolbar?: boolean;
  // стандартный box-shadow контейнеру таблицы (откл. по умолчанию)
  shadow?: number;
  // хидер с названием и фильтром строк
  header?: boolean;
  // кнопка с выпадающим списком
  dropdown?: boolean;
  onFilterChange?: (value: string) => void;
  // минимальная ширина таблицы(исп. для вкл-я горизонтального скролла)
  minTableWidth?: string;
  // значения, прокидываемые в выпадающий список кнопки
  menuOptions?: { label: string; value: string }[];
  // значения, прокидываемые в выпадающий список фильтра в хидере
  headerOptions?: { label: string; value: string }[];
  // название таблицы в хидере
  tableHeaderTitle?: string;
  // необходимость отображения кнопок фильтров в тулбаре
  toolbarFilters?: boolean;
};

const EnhancedTable: FC<Props> = ({
  columns,
  tableData,
  pagination,
  check,
  toolbar,
  shadow = 0,
  header,
  dropdown,
  onFilterChange,
  minTableWidth,
  menuOptions,
  headerOptions,
  tableHeaderTitle,
  toolbarFilters,
  ...props
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<number[]>([]);
  const [rows, setRows] = useState(tableData);

  // исп. для обновления строк в зависимости от фильтра в хидере
  useEffect(() => {
    setRows(tableData);
  }, [onFilterChange]);
  // переключение страницы
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  // удаление строки таблицы
  const handleRemoveRow = (indexToRemove: any) => {
    const updatedRows = rows.filter((_, index) => index !== indexToRemove);
    setRows(updatedRows);
  };
  // изменение кол-ва страниц в зависимости от количества строк на одной странице
  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // функция выделения всех строк таблицы по клику на чекбокс в шапке
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = Array.from(
        { length: tableData.length },
        (_, index) => index
      );
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };
  // функция выделения отдельной строки таблицы
  const handleClick = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: any[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  const isSelected = (id: number) => selected.indexOf(id) !== -1;
  // подсчет количества страницы таблицы
  const startIdx = page * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const paginatedData = rows.slice(startIdx, endIdx);

  return (
    <Box sx={boxStyle}>
      {toolbar && <TableToolbar filters={toolbarFilters} />}
      <Paper elevation={shadow} sx={paperStyles}>
        {header && (
          <EnhancedTableHeader
            title={tableHeaderTitle}
            onFilterChange={onFilterChange}
            options={headerOptions}
          />
        )}
        <TableContainer sx={tableContainerStyles}>
          <Table sx={{ minWidth: minTableWidth }}>
            <TableHead>
              <TableRow>
                {check && (
                  <Checkbox
                    sx={{
                      '&.MuiCheckbox-root': headCheckBoxStyles.root,
                      '&.Mui-checked': headCheckBoxStyles.checked,
                    }}
                    indeterminate={
                      selected.length > 0 && selected.length < tableData.length
                    }
                    checked={
                      tableData.length > 0 &&
                      selected.length === tableData.length
                    }
                    onChange={handleSelectAllClick}
                    inputProps={{
                      'aria-label': 'select all',
                    }}
                  />
                )}
                {columns?.map(({ label, colStyle }) => (
                  <TableCell key={uuidv4()} sx={colStyle}>
                    {props.headComponent ? (
                      props.headComponent(label)
                    ) : (
                      <Typography tag="p">{label}</Typography>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData?.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    position: 'relative',
                    ...props.rowStyle,
                  }}
                >
                  {check && (
                    <Checkbox
                      sx={checkBoxStyle}
                      checked={isSelected(index)}
                      onChange={(event) => handleClick(event, index)}
                      inputProps={{
                        'aria-labelledby': `enhanced-table-checkbox-${index}`,
                      }}
                    />
                  )}
                  {columns?.map(({ key, cellComponent, id }) => (
                    <TableCell key={id} sx={props.cellStyle}>
                      {cellComponent ? (
                        cellComponent(row[key], uuidv4())
                      ) : (
                        <Typography tag="p">{row[key]}</Typography>
                      )}
                    </TableCell>
                  ))}
                  {dropdown && (
                    <TableMenuButton
                      onRemove={() => handleRemoveRow(index)}
                      options={menuOptions}
                    />
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {pagination && (
        <div className={styles.pagination}>
          <CustomPagination
            page={page}
            rowsPerPage={rowsPerPage}
            onChange={handleChangePage}
            count={tableData.length}
          />
          <TablePagination
            sx={paginationStyles}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Отображать по строкам"
          />
        </div>
      )}
    </Box>
  );
};

export default EnhancedTable;
