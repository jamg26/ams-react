const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_client_access = new Schema({
  user_id: String,
  client_id: String,
  access_status: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('user_client_access', user_client_access);
