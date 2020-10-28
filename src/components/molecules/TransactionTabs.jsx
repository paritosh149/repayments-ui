import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TransactionTable from './TransactionTable';
import TabPanel from '../atoms/TabPanel';

const filters = (repayments) =>
  Array.from(new Set(repayments.map((row) => row.type.toUpperCase())));

export default function TransactionTabs({ selectedFilterName }) {
  const history = useHistory();
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
  const [isFetched, setFetched] = React.useState(false);
  const [repayments, setRepayments] = React.useState([]);
  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json', {
          cancelToken: source.token,
        });
        setRepayments(response.data.repayments);
        setFetched(true);
      } catch (e) {}
    };
    fetchData();
    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    if (repayments && repayments.length > 0) {
      const found = memoizedFilterArray(repayments).indexOf(
        selectedFilterName.toUpperCase()
      );

      handleTabChange(null, found >= 0 ? found : 0);
    }
  }, [repayments]);
  const memoizedFilterArray = useCallback(() => filters(repayments), [
    repayments,
  ]);
  const handleTabChange = (event, newTabIndex) => {
    if (newTabIndex >= 0) {
      history.push(
        '/' + memoizedFilterArray(repayments)[newTabIndex].toLowerCase()
      );
      setSelectedTabIndex(newTabIndex);
    }
  };

  return (
    <Paper elevation={0}>
      {!isFetched || !repayments ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <Tabs value={selectedTabIndex} onChange={handleTabChange}>
            {memoizedFilterArray(repayments).map((filterName, index) => (
              <Tab key={filterName} label={filterName} />
            ))}
          </Tabs>
          <TabPanel tabValue={selectedTabIndex} index={selectedTabIndex}>
            <TransactionTable
              repayments={repayments.filter((row) => {
                return (
                  row.type.toUpperCase() ===
                  memoizedFilterArray(repayments)[selectedTabIndex]
                );
              })}
            />
          </TabPanel>
        </>
      )}
    </Paper>
  );
}

TransactionTabs.propTypes = {
  selectedFilterName: PropTypes.string,
};
