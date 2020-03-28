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

module.exports = mongoose.model(
  'hr_a_asset_request',
  hr_a_asset_request,
  'hr_a_asset_request'
);
