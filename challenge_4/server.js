const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res, next) => {

});

app.post('/', (req, res, next) => {

});

app.listen(port, () => console.log(`listening on port ${port}`));
