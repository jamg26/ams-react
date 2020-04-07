const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_cost_center_access = new Schema({
  use_id: String,
  cost_center_id: String,
  access_status: String,
  created_at: Date,
  updated_at: Date
});
user_cost_center_access.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'user_cost_center_access',
  user_cost_center_access
);
