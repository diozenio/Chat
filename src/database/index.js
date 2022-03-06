const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_CNSTRING = process.env.MONGO_CNSTRING; 

mongoose.connect(MONGO_CNSTRING || 'mongodb://localhost:27017/chat');
mongoose.Promise = global.Promise;

module.exports = mongoose; 