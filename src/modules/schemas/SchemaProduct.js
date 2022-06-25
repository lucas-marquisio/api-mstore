const mongoose = require('../../db')

const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  category: String,
  about: String,
  offer: Number,
  image: String
})

module.exports = Product