const mongoose = require('../../db')

const Category = mongoose.model('category', {
  category: String,
})

module.exports = Category