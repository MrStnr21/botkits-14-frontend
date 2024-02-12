/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, ReactNode, useMemo, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { SxProps } from '@mui/system';
import Paper from '@mui/material/Paper';
import { Box, Checkbox, Divider, useMediaQuery } from '@mui/material';
import Typography from '../../ui/typography/typography';
import TableToolbar from '../table-toolbar/table-toolbar';
import EnhancedTableHeader from '../table-header/table-header';
import {
  headCheckBoxStyles,
  paperStyles,
  checkBoxStyle,
  boxStyle,
  tableContainerStyles,
  checkboxTableCellStyle,
} from './tableStyles';
import CustomPagination from './custom-pagination/custom-pagination';
import styles from './enhanced-table.module.scss';
import TableMenuButton from '../table-menu-button/table-menu-button';
import SelectPagination from './select-pagination/select-pagination';
import { Option } from '../../utils/types';
import { useAppDispatch } from '../../services/hooks/hooks';
import { createAddErrorAction } from '../../services/actions/errors/errors';
import { switchingWidth } from '../../stylesheets/scss-variables';

type Columns = {
  id?: number;
  key: string;
  label: ReactNode;
  colStyle?: SxProps;
  cellComponent?: (
    data: any,
    onCellUpdate: (newValue: string | boolean) => void
  ) => ReactNode;
};

export type TableData = {
  [key: string]: any;
};

interface IProps {
  columns: Columns[];
  tableData: TableData[];
  headComponent: (data: any) => ReactNode;
  headStyle?: SxProps;
  rowStyle?: SxProps;
  cellStyle?: SxProps;
  /** нужна ли пагинация в таблице */
  pagination?: boolean;
  /** подключены ли чекбоксы к строке */
  check?: boolean;
  // наличие кнопок фильтров и выгрузки над таблицей
  toolbar?: boolean;
  // необходимость отображения кнопок фильтров в тулбаре
  toolbarFilters?: boolean;
  // стандартный box-shadow контейнеру таблицы (откл. по умолчанию)
  shadow?: number;
  /** хидер с названием и фильтром строк */
  header?: boolean;
  // значения, прокидываемые в выпадающий список фильтра в хидере
  headerOptions?: { label: string; value: string }[];
  /** название таблицы в хидере */
  tableHeaderTitle?: string;
  // кнопка с выпадающим списком
  dropdown?: boolean;
  // функция обработки изменения фильтров из тулбара таблицы (при её наличии)
  onFilterChange?: (value: string) => void;
  /** минимальная ширина таблицы(исп. для вкл-я горизонтального скролла) */
  minTableWidth?: string;
  /** значения, прокидываемые в выпадающий список кнопки */
  menuOptions?: { label: string; value: string }[];
  // количество отображаемых на одной странице строк в начальном состоянии таблицы
  rowsPerPageValue?: number;
  // функция-сеттер для родительского компонента
  setTableData?: (updatedData: TableData[]) => void;
  onUpdate?: (updatedData: TableData) => Promise<unknown>;
  onDelete?: (id: string) => Promise<unknown>;
}

const EnhancedTable: FC<IProps> = ({
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
  rowsPerPageValue = 5,
  setTableData,
  onUpdate,
  onDelete,
  ...props
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageValue);
  const [selected, setSelected] = useState<number[]>([]);
  const dispatch = useAppDispatch();

  const isMobile = useMediaQuery(`(max-width: ${switchingWidth})`);

  // переключение страницы
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  // удаление строки таблицы
  const handleRemoveRow = (indexToRemove: number) => {
    const removingRow = tableData[indexToRemove];
    const updatedRows = tableData.filter((_, index) => index !== indexToRemove);
    /*     if (setTableData) {
      setTableData(updatedRows);
    } */
    if (onDelete && setTableData) {
      onDelete(removingRow.id)
        .then(() => {
          setTableData(updatedRows);
        })
        .catch(() => {
          dispatch(createAddErrorAction('Ошибка при отправке данных'));
        });
    }
  };
  // функция обновления состояния табличной ячейки
  const handleCellUpdate = (
    rowId: number,
    colName: string,
    updatedValue?: string | boolean
  ) => {
    const rowIndex = tableData.findIndex((row) => row.id === rowId);

    if (setTableData && rowIndex !== -1) {
      const unUpdatedData = [...tableData];
      const updatedData = [...tableData];
      const updatedRow = {
        ...updatedData[rowIndex],
        [colName]: updatedValue,
      };
      updatedData[rowIndex] = updatedRow;
      setTableData(updatedData);
      if (onUpdate) {
        onUpdate(updatedRow).catch((e) => {
          setTableData(unUpdatedData);
          dispatch(createAddErrorAction('Ошибка при отправке данных'));
          console.log(e);
        });
      }
    }
  };
  // изменение кол-ва страниц в зависимости от количества строк на одной странице
  const handleChangeRowsPerPage = (option: Option) => {
    setRowsPerPage(Number(option.value));
    setPage(0);
  };
  // функция выделения всех строк таблицы по клику на чекбокс в шапке
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = tableData.map((row) => row.id);
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
  const paginatedData = useMemo(() => {
    const startIdx = page * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;
    return tableData.slice(startIdx, endIdx);
  }, [page, rowsPerPage, tableData]);

  return (
    <Box sx={boxStyle}>
      <Paper elevation={shadow} sx={paperStyles}>
        {toolbar && (
          <TableToolbar
            filters={toolbarFilters}
            tableData={tableData}
            selectedRows={selected}
          />
        )}
        {header && (
          <EnhancedTableHeader
            title={tableHeaderTitle}
            onFilterChange={onFilterChange}
            options={headerOptions}
          />
        )}
        {!isMobile && (
          <TableContainer sx={tableContainerStyles}>
            <Table sx={{ minWidth: minTableWidth }}>
              <TableHead>
                <TableRow>
                  {check && (
                    <TableCell
                      sx={{
                        '&.MuiTableCell-root': checkboxTableCellStyle,
                      }}
                    >
                      <Checkbox
                        sx={{
                          '&.MuiCheckbox-root': headCheckBoxStyles.root,
                          '&.Mui-checked': headCheckBoxStyles.checked,
                        }}
                        indeterminate={
                          selected.length > 0 &&
                          selected.length < tableData.length
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
                    </TableCell>
                  )}
                  {columns?.map(({ label, colStyle, key }) => (
                    <TableCell key={key} sx={colStyle}>
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
                {(pagination ? paginatedData : tableData).map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      position: 'relative',
                      ...props.rowStyle,
                    }}
                  >
                    {check && (
                      <TableCell
                        sx={{
                          '&.MuiTableCell-root': checkBoxStyle,
                        }}
                      >
                        <Checkbox
                          sx={checkBoxStyle}
                          checked={isSelected(row.id)}
                          onChange={(event) => handleClick(event, row.id)}
                          inputProps={{
                            'aria-labelledby': `enhanced-table-checkbox-${row.id}`,
                          }}
                        />
                      </TableCell>
                    )}
                    {columns?.map(({ key, cellComponent }) => (
                      <TableCell key={`${row.id}_${key}`} sx={props.cellStyle}>
                        {cellComponent ? (
                          cellComponent(row[key], (newValue: any) =>
                            handleCellUpdate(row.id, key, newValue)
                          )
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
        )}
        {isMobile && (
          <TableContainer sx={tableContainerStyles}>
            <Table sx={{ minWidth: minTableWidth }}>
              <TableHead>
                <TableRow>
                  {check && (
                    <TableCell
                      sx={{
                        '&.MuiTableCell-root': checkboxTableCellStyle,
                      }}
                    >
                      <Checkbox
                        sx={{
                          '&.MuiCheckbox-root': headCheckBoxStyles.root,
                          '&.Mui-checked': headCheckBoxStyles.checked,
                        }}
                        indeterminate={
                          selected.length > 0 &&
                          selected.length < tableData.length
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
                    </TableCell>
                  )}
                  {/* {columns?.map(({ label, colStyle, key }) => (
                    <TableCell key={key} sx={colStyle}>
                      {props.headComponent ? (
                        props.headComponent(label)
                      ) : (
                        <Typography tag="p">{label}</Typography>
                      )}
                    </TableCell>
                  ))} */}
                </TableRow>
              </TableHead>
              <TableBody>
                {(pagination ? paginatedData : tableData).map((row, index) => (
                  <>
                    <TableRow>
                      {columns?.map(
                        ({ label, colStyle, key, cellComponent }) => (
                          <TableRow>
                            <TableCell key={key} sx={colStyle}>
                              {props.headComponent ? (
                                props.headComponent(label)
                              ) : (
                                <Typography tag="p">{label}</Typography>
                              )}
                            </TableCell>
                            <TableCell
                              key={`${row.id}_${key}`}
                              sx={props.cellStyle}
                            >
                              {cellComponent ? (
                                cellComponent(row[key], (newValue: any) =>
                                  handleCellUpdate(row.id, key, newValue)
                                )
                              ) : (
                                <Typography tag="p">{row[key]}</Typography>
                              )}
                            </TableCell>
                            {dropdown && (
                              <TableMenuButton
                                onRemove={() => handleRemoveRow(index)}
                                options={menuOptions}
                              />
                            )}
                          </TableRow>
                        )
                      )}
                    </TableRow>
                    <Divider />
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
      {pagination && (
        <div className={styles.pagination}>
          <CustomPagination
            page={page}
            rowsPerPage={rowsPerPage}
            onChange={handleChangePage}
            count={tableData.length}
          />
          <SelectPagination
            options={['5', '10', '25']}
            value={rowsPerPage.toString()}
            handleSelect={handleChangeRowsPerPage}
            title="Отображать по строкам: "
          />
        </div>
      )}
    </Box>
  );
};

export default EnhancedTable;
