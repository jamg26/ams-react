const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_cost_center_access = new Schema({
  use_id: String,
  cost_center_id: String,
  access_status: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'user_cost_center_access',
  user_cost_center_access
);
