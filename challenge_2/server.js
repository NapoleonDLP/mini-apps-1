//import express
const express = require('express');
//make your connection
const app = express();
//declare port
var port = 3000;
//build routes

//install middleware

//log what port it is listening to
app.listen(port, () => console.log(`Listening on port ${port}`));