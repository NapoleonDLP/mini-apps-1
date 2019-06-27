////**************************************************************************** */
////                            Mongoose connection
////**************************************************************************** */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;// and create the schema differently bellow in comments
mongoose.connect('mongodb://127.0.0.1/customers', {useNewUrlParser: true}); //creates the database and connects to it

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection:error:'));
db.once('open', () => console.log('Connected to mongoDB'));

////var checkoutSchema = new mongoose.Schema({
var customerSchema = new Schema({ //this is another way
  name: String,
  email: String,
  password: String,
  address: String,
  city: String,
  state: String,
  zipCode: Number,
  phoneNumber: String,
  creditCard: Number,
  expiryDate: String,
  cvv: Number,
  billingZipCode: Number
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = {
  db: db,
  Customer: Customer
};

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



//only one per module
// export default = {
//   db: db,
//   customer: customer
// }