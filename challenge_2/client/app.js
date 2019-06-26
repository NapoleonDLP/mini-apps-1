/* eslint-disable no-console */
// /* eslint-disable no-console */
// const form = document.getElementById('report_submit');
// form.addEventListener('click', (event) => {
//   event.preventDefault();
//   const report = document.getElementById('report_text');
//   // report.value gives me the string put into the input box.
//   // fetch('https://127.0.0.1:3000/api/report', {
//   //   method: 'POST',
//   //   body: report.value,
//   // }).then(response => console.log(response))
//   //   .catch(reason => console.log(reason));
// });

const fs = require('fs');
// const csvReport = require('../samples/csv_report.csv');

// const csv = require('../csv_report.csv')

// when invoked is going to render to the html page the csv report
// eslint-disable-next-line func-names
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line func-names
const showReport = function () {
  fs.readFile('csv_report.csv', 'utf8', (err, data) => {
    if (err) {
      console.log('error occured', JSON.stringify(err));
    }
    // const dataArray = data.split(/\r?\n/);
    console.log('file contents are :', JSON.stringify(data));
  });
};

module.exports = showReport;
