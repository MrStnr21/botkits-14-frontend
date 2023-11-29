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
};

const paperStyles = {
  // width: '100%',
  // padding: '40px',
  backgroundColor: 'inherit',
  // borderRadius: '30px',
  // boxSizing: 'border-box',
  // boxShadow: '0px 6px 16px 0px rgba(21, 18, 51, 0.08)',
};
const paginationStyles = {
  width: '100%',
};
const checkBoxStyles = {
  root: {
    backgroundColor: '#ECEFFF',
    width: '100%',
    borderRadius: '10px 0 0 10px',
  },
  checked: {
    backgroundColor: '#ECEFFF',
    width: '100%',
    borderRadius: '10px 0 0 10px',
  },
};

const TableComponent: FC<Props> = ({
  columns,
  tableData,
  pagination,
  check,
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

  return (
    <Box sx={{ width: '100%' }}>
      <Paper elevation={0} sx={paperStyles}>
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
                      'aria-label': 'select all desserts',
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
              {tableData?.map((row, index) => (
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={paginationStyles}
        />
      )}
    </Box>
  );
};

export default TableComponent;
