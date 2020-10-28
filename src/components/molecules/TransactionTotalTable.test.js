import React from 'react';
import { shallow } from 'enzyme';
import { TableCell } from '@material-ui/core';
import TransactionTotalTable from './TransactionTotalTable';
import '../../setupTests';

describe('TransactionTotalTable', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TransactionTotalTable tableAmounts={[10, 20]} />);

    expect(wrapper.find(TableCell).at(0).text()).toEqual(
      'Total Pending Repayments'
    );

    expect(wrapper.find(TableCell).at(1).text()).toEqual('$30.00');
  });

  it('renders empty correctly', () => {
    const wrapper = shallow(<TransactionTotalTable tableAmounts={[]} />);

    expect(wrapper.find(TableCell).at(0).text()).toEqual(
      'Total Pending Repayments'
    );

    expect(wrapper.find(TableCell).at(1).text()).toEqual('$0.00');
  });
});
