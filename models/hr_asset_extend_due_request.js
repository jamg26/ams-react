const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_asset_extend_due_request = new Schema({
  extend_due_request_id: String,
  request_id: String,
  newduedate: String,
  request_date: String,
  request_status: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_asset_extend_due_request.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_asset_extend_due_request',
  hr_asset_extend_due_request,
  'hr_asset_extend_due_request'
);
