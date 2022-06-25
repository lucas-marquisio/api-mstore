const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/dbmstore');

module.exports = mongoose
