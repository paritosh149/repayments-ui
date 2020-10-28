import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableCell, TableHead, TableRow } from '@material-ui/core';

import { AmountFormat } from '../../util/amount';

export default function TransactionTotal({ tableAmounts }) {
  return (
    <Table style={{ width: '100%', paddingRight: '0' }}>
      <TableHead>
        <TableRow>
          <TableCell align="left">Total Pending Repayments</TableCell>
          <TableCell align="right">
            {AmountFormat(tableAmounts.reduce((acc, row) => acc + row, 0))}
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}

TransactionTotal.propTypes = {
  tableAmounts: PropTypes.arrayOf(PropTypes.number),
};
