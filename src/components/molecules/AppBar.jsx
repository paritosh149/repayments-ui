import React from 'react';
import { CssBaseline, Toolbar, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/images/nimble-logo.svg';
import logoWords from '../../assets/images/logo-words.svg';

const useStyles = makeStyles({
  root: {
    background: '#ec2924',
  },
  logo: {
    margin: 'auto',
    textAlign: 'center',
  },
  logoHorizontallyCenter: {
    height: '5em',
    position: 'relative',
    top: '50%',
  },
});

export default function CustomAppBar() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="static" className={classes.root} elevation={0}>
        <Toolbar>
          <div className={classes.logo}>
            <img
              src={logo}
              className={classes.logoHorizontallyCenter}
              alt="logo"
            />
            <br />
            <img
              src={logoWords}
              className={classes.logoHorizontallyCenter}
              style={{ height: '1em' }}
              alt="NIMBLE"
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
