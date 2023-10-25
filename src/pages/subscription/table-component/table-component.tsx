import { FC, ReactNode } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { v4 as uuidv4 } from 'uuid';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { SxProps } from '@mui/system';
import Typography from '../../../ui/typography/typography';

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
};

const TableComponent: FC<Props> = ({ columns, tableData, ...props }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow sx={props.headStyle}>
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
          {tableData?.map((row) => (
            <TableRow key={uuidv4()} sx={props.rowStyle}>
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
  );
};

export default TableComponent;
