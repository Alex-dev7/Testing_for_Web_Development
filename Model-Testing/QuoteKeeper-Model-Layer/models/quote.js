const { mongoose} = require('../database.js');

const quoteSchema = new mongoose.Schema({
  quote: String,
  attributed:  String,
  source: String
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote