/* eslint-disable no-console */
// import express
const express = require('express');

// make your connection
const app = express();
// declare port
const port = 3000;
// install middleware
app.use(express.static('client'));

// build routes
// serve static files found in samples?
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/api/report', (req, res) => {
  console.log('POST WAS MADE: ', req.body);
  res.send(req);
});

// log what port it is listening to
app.listen(port, () => console.log(`Listening on port ${port}`));
