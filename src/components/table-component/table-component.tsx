/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, ReactNode, useState } from 'react';
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
import styles from './table-component.module.scss';

type Columns = {
  key: string;
  label: ReactNode;
  colStyle?: SxProps;
  cellComponent?: (data: any) => ReactNode;
};

type TableData = {
  [key: string]: ReactNode;
};

type Props = {
  columns: Columns[];
  tableData: TableData[];
  headComponent: (data: any) => ReactNode;
  headStyle?: SxProps;
  rowStyle?: SxProps;
  cellStyle?: SxProps;
  pagination?: boolean;
  check?: boolean;
  toolbar?: boolean;
  shadow?: number;
  header?: boolean;
  onFilterChange?: (value: string) => void;
  minTableWidth?: string;
};

const TableComponent: FC<Props> = ({
  columns,
  tableData,
  pagination,
  check,
  toolbar,
  shadow = 0,
  header,
  onFilterChange,
  minTableWidth,
  ...props
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<number[]>([]);
  const [rows, setRows] = useState(tableData);
  console.log(page);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // const handleRemoveRow = (indexToRemove: any) => {
  //   const updatedRows = rows.filter((_, index) => index !== indexToRemove);
  //   setRows(updatedRows);
  // };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
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

  const startIdx = page * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const paginatedData = tableData.slice(startIdx, endIdx);

  return (
    <Box sx={boxStyle}>
      {toolbar && <TableToolbar needFilter />}
      <Paper elevation={shadow} sx={paperStyles}>
        {header && (
          <EnhancedTableHeader
            title="Созданные промокоды"
            onFilterChange={onFilterChange}
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
                  key={uuidv4()}
                  sx={{
                    position: 'relative', // временно для выравнивания чекбокса
                    ...props.rowStyle,
                  }}
                  onClick={(event) => handleClick(event, index)}
                >
                  {check && (
                    <Checkbox
                      sx={checkBoxStyle}
                      checked={isSelected(index)}
                      inputProps={{
                        'aria-labelledby': `enhanced-table-checkbox-${index}`,
                      }}
                    />
                  )}
                  {columns?.map(({ key, cellComponent }) => (
                    <TableCell key={uuidv4()} sx={props.cellStyle}>
                      {cellComponent ? (
                        cellComponent(row[key])
                      ) : (
                        <Typography tag="p">{row[key]}</Typography>
                      )}
                    </TableCell>
                  ))}
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

export default TableComponent;
