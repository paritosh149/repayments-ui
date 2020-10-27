import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import SimpleTabs from './TransactionTabs';

export default () => {
  return (
    <main>
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
        <SimpleTabs />
      </Container>
    </main>
  );
};
