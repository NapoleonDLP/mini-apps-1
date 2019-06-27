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
  console.log('GETTIN');
  res.send('Yup');
});

app.post('/api', (req, res, next) => {
  console.log('posted on the monster block');
  res.end('posted on the monster block');
});

app.listen(port, () => console.log(`listening on port ${port}`));