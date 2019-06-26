//bring in express
const express = require('express');
//connect to express
const app = express();
//declare port
const port = 3000;

//install middleware
app.use(express.static("public"));

//build routes

//app.listen
app.listen(port, () => console.log(`Listening on port ${port}`))