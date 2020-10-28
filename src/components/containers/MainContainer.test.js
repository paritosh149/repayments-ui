import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import MainContainer from './MainContainer';

import '../../setupTests';
import TransactionTabs from '../molecules/TransactionTabs';

describe('MainContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainContainer />);
    expect(wrapper.find(Container).exists()).toBeTruthy();
    expect(wrapper.find(Typography).exists()).toBeTruthy();

    expect(wrapper.find(Typography).text()).toEqual('Repayments');

    expect(wrapper.find(Route).length).toEqual(2);

    expect(wrapper.find(Route).at(0).prop('path')).toEqual('/:filter');

    expect(
      wrapper.find(Route).at(0).prop('component')({
        match: { params: { filter: 'A' } },
      })
    ).toEqual(<TransactionTabs selectedFilterName="A" />);

    expect(wrapper.find(Route).at(1).prop('path')).toEqual('/');

    expect(
      wrapper.find(Route).at(1).prop('component')({
        match: { params: { filter: 'A' } },
      })
    ).toEqual(<TransactionTabs selectedFilterName="" />);
  });
});
