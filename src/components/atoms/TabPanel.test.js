import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '@material-ui/core';
import TabPanel from './TabPanel';
import '../../setupTests';

describe('TabPanel', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <TabPanel>
        <div>Hello</div>
      </TabPanel>
    );

    expect(wrapper.find(Box).at(0).prop('p')).toEqual(1);
    expect(wrapper.find(Box).at(0).childAt(0).text()).toEqual('Hello');
  });
});
