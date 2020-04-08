const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_asset_transaction_log = new Schema({
  asset_transaction_log_id: String,
  asset_tag:  [{ type: Schema.Types.ObjectId, ref: 'hr_assets' }] ,
  log_date: String,
  log_time: String,
  audit_action_date: String,
  log_action: String,
  log_action_requestor_id: [{ type: Schema.Types.ObjectId, ref: 'users' }] ,
  log_action_requestor: String,
  transaction_action: String,
  transaction_ticket_no: String,
  deny_reason: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_asset_transaction_log.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_asset_transaction_log',
  hr_asset_transaction_log,
  'hr_asset_transaction_log'
);
