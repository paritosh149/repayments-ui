import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

export default function TabPanel(props) {
  const { children, tabValue, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={tabValue !== index} {...other}>
      {tabValue === index && <Box p={1}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  tabValue: PropTypes.any.isRequired,
};
