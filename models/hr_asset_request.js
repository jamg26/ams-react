const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_asset_request = new Schema({
  request_id: String,
  emp_id: [{ type: Schema.Types.ObjectId, ref: 'users' }] ,
  asset_tag: [{ type: Schema.Types.ObjectId, ref: 'hr_assets' }] ,
  asset_remaining_amount: String,
  asset_borrow_date: Date,
  asset_due_date: Date,
  request_status: String,
  request_active: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_asset_request.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_asset_requests',
  hr_asset_request,
  'hr_asset_requests'
);
