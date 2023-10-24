/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
  value: ReactNode;
};

type TableData = {
  [key: string]: ReactNode;
};

type Props = {
  columns?: Columns[];
  tableData?: TableData[];
  headStyle?: SxProps;
  rowStyle?: SxProps;
  cellStyle?: SxProps;
};

const TableComponent: FC<Props> = ({
  columns,
  tableData,
  headStyle,
  rowStyle,
  cellStyle,
}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns?.map(({ value }) => (
              <TableCell key={uuidv4()} sx={headStyle}>
                <Typography tag="p">{value}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?.map((row) => (
            <TableRow key={uuidv4()} sx={rowStyle}>
              {columns?.map(({ key }) => (
                <TableCell key={uuidv4()} sx={cellStyle}>
                  <Typography tag="p">{row[key]}</Typography>
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
