/* eslint-disable no-console */
// import express
const express = require('express');
const bodyParser = require('body-parser');
const showReport = require('./client/app.js');
// const csvReport = require('./samples/csv_report.csv');
// const serveStatic = require('serve-static');
// const path = require('path');

// make your connection
const app = express();

// declare port
const port = 3000;

// install middleware
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(serveStatic('client/index.html'));

app.use(express.static('client')); // serves index html
app.use(bodyParser.json());

// build routes
// serve static files found in samples?
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// eslint-disable-next-line no-unused-vars
app.post('/api/report', (req, res) => {
  showReport();
  console.log('POST WAS MADE: ', req.body.report);
  // res.send();
});

// log what port it is listening to
app.listen(port, () => console.log(`Listening on port ${port}`));
