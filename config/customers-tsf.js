const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create schema basically it is not but how your data is stored in database
const CustomerSchema = new Schema({
  account: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
})

module.exports = Customer = mongoose.model('customer', CustomerSchema)
