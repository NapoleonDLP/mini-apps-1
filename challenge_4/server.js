const express = require('express');
const app = express();

const port = 3000;

app.list(port, () => console.log(`listening on port ${port}`));
