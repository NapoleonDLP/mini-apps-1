//bring in express
const express = require('express');
const bodyParser = require('body-parser');
const {db, Customer} = require('./db/db.js');
//connect to express
const app = express();
//declare port
const port = 3000;

//install middleware
// app.use()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//build routes
app.get('/users', (req, res) => {
  //db query db
  console.log('Get ran')
});

app.post('/submit', (req, res) => {
  var newCustomer = new Customer(req.body);
  //.save() is a method used in mongo
  newCustomer.save();
  res.send(200);
});
//app.listen
app.listen(port, () => console.log(`Listening on port ${port}`));


////sample schema
// {
// "name": "Napoleon",
// "email": "naps@hotmail.com",
// "password": "pasword",
// "address": {
//   "line1": "873 lindy way",
//   "line2": "",
// },
// "city": "newark",
// "state": "CA",
// "zipCode": 96150,
// "phoneNumber": 5102095587,
// "creditCard": 7568999,
// "expiryDate": 04/20,
// "cvv": 789,
// "billingZipCode": 96150
// }