const mongoose = require("mongoose");
const config = require('../config/dev');
require('./models/portfolio');

exports.init = () => {
  mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log('>>> Connected to database');
  })
}

