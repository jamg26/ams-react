const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_a_asset_request = new Schema({
  id: Number,
  request_id: String,
  emp_id: String,
  asset_tag: String,
  asset_remaining_amount: String,
  asset_borrow_date: String,
  asset_due_date: String,
  request_status: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_a_asset_request.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_a_asset_request',
  hr_a_asset_request,
  'hr_a_asset_request'
);
