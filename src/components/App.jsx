import React from 'react';
import AppBar from './molecules/AppBar';
import MainContainer from './containers/MainContainer';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <main>
        <MainContainer />
      </main>
    </ThemeProvider>
  );
}
