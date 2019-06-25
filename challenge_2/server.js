/* eslint-disable no-console */
// import express
const express = require('express');
const bodyParser = require('body-parser');
// const serveStatic = require('serve-static');
// const path = require('path');

// make your connection
const app = express();

// declare port
const port = 3000;

// install middleware
app.use(bodyParser.urlencoded({ extend: false }));

// app.use(serveStatic('client/index.html'));

app.use(express.static('client'));
app.use(bodyParser.json());

// build routes
// serve static files found in samples?
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/api/report', (req, res) => {
  console.log('POST WAS MADE: ', req.body);
  res.send(req.body);
});

// log what port it is listening to
app.listen(port, () => console.log(`Listening on port ${port}`));
