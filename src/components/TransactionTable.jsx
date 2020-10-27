import React, { useState } from 'react';

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
import { AmountFormat } from '../util/Amount';

export default function BasicTable(props) {
  const [order, setOrder] = useState('asc');
  return (
    <TableContainer elevation={0} component={'div'}>
      <Table
        component={'div'}
        style={{ width: '100%', paddingRight: '0' }}
        aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Date
              <TableSortLabel
                active={true}
                direction={order}
                onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
              />
            </TableCell>
            <TableCell align="left">Transaction</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...props.tableData]
            .sort((a, b) =>
              (order === 'asc' && dayjs(a.date).isBefore(dayjs(b.date))) ||
              (order === 'desc' && dayjs(b.date).isBefore(dayjs(a.date)))
                ? 1
                : -1
            )
            .map((row) => (
              <TableRow key={row.date}>
                <TableCell component="th" scope="row">
                  {dayjs(row.date).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="right">{AmountFormat(row.amount)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Table
        component={'div'}
        style={{ width: '100%', paddingRight: '0' }}
        aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Total Pending Repayments</TableCell>
            <TableCell align="right">
              {AmountFormat(
                props.tableData.reduce((acc, row) => acc + row.amount, 0)
              )}
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
