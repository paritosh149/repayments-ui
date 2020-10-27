import React from 'react';
import AppBar from './AppBar';
import MainContainer from './MainContainer';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <MainContainer />
    </ThemeProvider>
  );
}
