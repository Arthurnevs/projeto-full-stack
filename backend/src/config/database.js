require('dotenv').config()
const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_URL

const url = mongo_url;



mongoose.connect(url,{useUnifiedTopology: true, useNewUrlParser: true})

module.exports = mongoose;