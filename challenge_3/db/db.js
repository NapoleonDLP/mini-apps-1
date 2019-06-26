////**************************************************************************** */
////                            Mongoose connection
////**************************************************************************** */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/customers', {useNewUrlParser: true}); //creates the database and connects to it
const Schema = mongoose.Schema;// and create the schema differently bellow in comments

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection:error:'));
db.once('open', () => console.log('Connected to mongoDB');

////var checkoutSchema = new mongoose.Schema({
var customersSchema = new Schema({ //this is another way
  name: String,
  email: String,
  password: String,
  adress: {
    line1: String,
    line2: String,
  },
  city: String,
  state: String,
  zipCode: Number,
  phoneNumber: String,
  creditCard#: Number,
  expiryDate: String,
  cvv: Number,
  billingZipCode: Number
})

mongoose.model('Customer', customersSchema);

////**************************************************************************** */
////                            MongoDB connection
////**************************************************************************** */

// //import mongodb
// var MongoClient = require('mongodb').MongoClient
// const assert = require('assert');

// //setup connection to the db

// //connection URL
// const url = 'mongodb://localhost:3000'; // does this connect the server to my server

// //Database Name
// const dbName = 'checkout'

// //create a new MongoClient
// const client = new MongoClient(url);

// //use connect method to connect to the Server
// client.connect( (err) => {
//   assert.equal(null, err);
//   console.log('Connected successfully to server');

//   const db = client.db(dbname);

//   client.close()
// })
exports default = db