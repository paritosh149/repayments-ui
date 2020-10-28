import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TransactionTabs from '../molecules/TransactionTabs';

export default () => {
  return (
    <Container maxWidth="md">
      <Typography
        fontWeight="fontWeightBold"
        component="h4"
        variant="h5"
        align="left"
        color="textPrimary"
        gutterBottom>
        <Box mt={2} fontWeight="fontWeightBold" textAlign="left">
          Repayments
        </Box>
      </Typography>
      <Router>
        <Switch>
          <Route
            path="/:filter"
            component={(props) => (
              <TransactionTabs selectedFilterName={props.match.params.filter} />
            )}
          />
          <Route
            path="/"
            component={(props) => <TransactionTabs selectedFilterName={''} />}
          />
        </Switch>
      </Router>
    </Container>
  );
};
