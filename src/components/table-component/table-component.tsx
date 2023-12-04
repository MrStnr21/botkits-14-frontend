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
import { checkBoxStyles, paginationStyles, paperStyles } from './tableStyles';
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
};

const TableComponent: FC<Props> = ({
  columns,
  tableData,
  pagination,
  check,
  toolbar,
  shadow = 0,
  header,
  ...props
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<any[]>([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = tableData.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const startIdx = page * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const paginatedData = tableData.slice(startIdx, endIdx);

  return (
    <Box sx={{ width: '100%' }}>
      {toolbar && <TableToolbar needFilter />}
      <Paper elevation={shadow} sx={paperStyles}>
        {header && <EnhancedTableHeader title="Созданные промокоды" />}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {check && (
                  <Checkbox
                    sx={{
                      '&.MuiCheckbox-root': checkBoxStyles.root,
                      '&.Mui-checked': checkBoxStyles.checked,
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
                <TableRow key={uuidv4()} sx={props.rowStyle}>
                  {check && (
                    <Checkbox
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
