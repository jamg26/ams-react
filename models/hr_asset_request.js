const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_asset_request = new Schema({
  request_id: String,
  emp_id: String,
  asset_tag: String,
  asset_remaining_amount: String,
  asset_borrow_date: Date,
  asset_due_date: Date,
  request_status: String,
  request_active: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_asset_request',
  hr_asset_request,
  'hr_asset_request'
);
