const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_client_access = new Schema({
  user_id: String,
  client_id: String,
  access_status: String,
  created_at: Date,
  updated_at: Date
});
user_client_access.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model('user_client_access', user_client_access);
