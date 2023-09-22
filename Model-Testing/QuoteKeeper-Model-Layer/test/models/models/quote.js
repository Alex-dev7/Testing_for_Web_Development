const mongoose = require('../databse.js');

const quoteSchema = new mongoose.Schema({
  quote: String
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote