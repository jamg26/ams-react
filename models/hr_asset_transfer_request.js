const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_asset_transfer_request = new Schema({
  asset_transfer_request_id: String,
  asset_tag: String,
  asset_location: String,
  asset_site: String,
  asset_department_code: String,
  asset_note: String,
  asset_assign_to: String,
  asset_transfer_request_status: String,
  request_date: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_asset_transfer_request',
  hr_asset_transfer_request,
  'hr_asset_transfer_request'
);
