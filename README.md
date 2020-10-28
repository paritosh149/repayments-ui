# repayments-ui

Simple app to show repayments data in browser

## setup

- To run in cloud, go to [CodeSandBox](https://hykt0.csb.app/)

- To run locally, steps are:
  1. either Clone or download zip of the code from [Github](https://github.com/paritosh149/repayments-ui)
  2. Extract the code in a folder, if you downloaded the zip file.
  3. Open the Terminal and go to the directory of the code.
  4. `npm install`
  5. `npm start` For other commands / scripts please visit [Create React App](https://create-react-app.dev/docs/available-scripts)
  6. The script will open the default browser and load web app from http://localhost:3000/
  7. Wow!!! You're ready.

## Assumptions

1. Tabs are ordered based on the order of occurance of `type` in input data Json.
2. Paging is not required
3. No task is requiring use of sketch file

## To Do

- [x] Build to React
- [x] Read data from Json
- [x] Create tabs based on `type`
- [x] Filter table based on `type` and show in tab
- [x] Apply sorting to Date field
- [x] Total amount displayed below the Transaction table
- [x] Theme color set based on input file
- [x] Test cases
- [ ] Add Redux
- [ ] Add redux-observable middleware to redux for Json read and store
- [x] Responsive UI using Material-UI
- [ ] Optimizations (Data, process, rendering)
- [x] Lazy loading of data json
- [x] Memoized function (filters)
- [x] React Router for tabs
- [ ] Pagination
- [x] prop validation
- [ ] setupTests centralization
