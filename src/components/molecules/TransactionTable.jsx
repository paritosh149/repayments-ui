import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import dayjs from 'dayjs';
import { AmountFormat } from '../../util/amount';
import TransactionTotal from './TransactionTotalTable';

const ASC = 'asc';
const DESC = 'desc';
const DATE_FORMAT = 'DD/MM/YYYY';

export default function TransactionTable({ repayments }) {
  const [order, setOrder] = useState(ASC);
  return (
    <TableContainer elevation={0} component={'span'}>
      <Table style={{ width: '100%', paddingRight: '0' }}>
        <TableHead>
          <TableRow>
            <TableCell>
              Date
              <TableSortLabel
                active={true}
                direction={order}
                IconComponent={ArrowDropDownIcon}
                onClick={() => setOrder(order === ASC ? DESC : ASC)}
              />
            </TableCell>
            <TableCell align="left">Transaction</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...repayments]
            .sort((a, b) =>
              (order === ASC && dayjs(a.date).isBefore(dayjs(b.date))) ||
              (order === DESC && dayjs(b.date).isBefore(dayjs(a.date)))
                ? 1
                : -1
            )
            .map((row) => (
              <TableRow key={row.date}>
                <TableCell component="th" scope="row">
                  {dayjs(row.date).format(DATE_FORMAT)}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="right">{AmountFormat(row.amount)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TransactionTotal tableAmounts={repayments.map((row) => row.amount)} />
    </TableContainer>
  );
}

TransactionTable.propTypes = {
  repayments: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      type: PropTypes.string,
      description: PropTypes.string,
      amount: PropTypes.number,
    })
  ),
};
