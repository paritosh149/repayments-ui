import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import '../setupTests';
import { theme } from '../theme';

describe('App Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('ThemeProvider').exists()).toBeTruthy();
    const received = JSON.stringify(
      wrapper.find('ThemeProvider').props('theme').theme
    );
    expect(received).toEqual(JSON.stringify(theme));

    expect(
      wrapper.find('ThemeProvider').at(0).childAt(0).find('CustomAppBar')
    ).toBeDefined();
    expect(
      wrapper.find('ThemeProvider').at(0).childAt(0).find('MainContainer')
    ).toBeDefined();
  });
});
