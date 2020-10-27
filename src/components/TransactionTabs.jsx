import React from 'react';
import { Tabs, Tab, Paper } from '@material-ui/core';
import BasicTable from './TransactionTable';
import TabPanel from './TabPanel';
import tableData from '../data.json';
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const filters = Array.from(
  new Set(tableData.repayments.map((row) => row.type))
);

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log('handle Change', newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Paper elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example">
          {filters.map((filterName, index) => (
            <Tab key={filterName} label={filterName} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Paper>
      <TabPanel value={value} index={value}>
        <BasicTable
          type={filters[value]}
          tableData={tableData.repayments.filter(
            (row) => row.type.toUpperCase() === filters[value].toUpperCase()
          )}
        />
      </TabPanel>
    </div>
  );
}
