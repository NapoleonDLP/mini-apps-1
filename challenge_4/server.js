const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.json());

app.use(express.static('public'));
//serving static file defaults to '/' endpoint
// app.get('/', (req, res) => {} // in this case app.get with a
// '/' never executes gets requested because that get request is
// handled at the status

app.get('/api', (req, res) => {
  res.send();
});

app.post('/api', (req, res, next) => {
  res.end();
});

app.listen(port, () => console.log(`listening on port ${port}`));