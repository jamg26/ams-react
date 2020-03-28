const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_login_logs = new Schema({
  user_id: String,
  last_login_at: String,
  last_login_ip: String,
  system: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('user_login_logs', user_login_logs);
