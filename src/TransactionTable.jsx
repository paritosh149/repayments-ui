import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';

import dayjs from 'dayjs';
import tableData from './data.json';
export default function BasicTable(props) {
  console.log('BasicTable props', props);
  return (
    <TableContainer elevation={0}>
      <Table
        style={{ width: '100%', paddingRight: '0' }}
        aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Date
              <TableSortLabel
                active={true}
                direction={'asc'}
                onClick={() => {}}
              />
            </TableCell>
            <TableCell align="left">Transaction</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.repayments
            .filter(
              (row) => row.type.toUpperCase() === props.type.toUpperCase()
            )
            .map((row) => (
              <TableRow key={row.date}>
                <TableCell component="th" scope="row">
                  {dayjs(row.date).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Table
        style={{ width: '100%', paddingRight: '0' }}
        aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Total Pending Repayments</TableCell>
            <TableCell align="right">
              {tableData.repayments
                .filter(
                  (row) => row.type.toUpperCase() === props.type.toUpperCase()
                )
                .reduce((acc, row) => acc + row.amount, 0)}
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
