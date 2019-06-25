/* eslint-disable no-console */
// import express
const express = require('express');

// make your connection
const app = express();
// declare port
const port = 3000;
// install middleware


// build routes
// serve static files found in samples?
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/api/report', (req, res) => {
  res.send('posted');
});

// log what port it is listening to
app.listen(port, () => console.log(`Listening on port ${port}`));
