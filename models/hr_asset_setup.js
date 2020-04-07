const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_asset_setup = new Schema({
  asset_setup_tag: String,
  asset_setup_type: String,
  asset_setup_description: String,
  asset_setup_sku: String,
  asset_setup_category: String,
  asset_setup_site: String,
  asset_setup_sub_cat: String,
  asset_setup_ad: String,
  asset_setup_ac: String,
  asset_setup_sc: String,
  asset_setup_location: String,
  asset_setup_dept: String,
  asset_setup_logistic_officer: String,
  asset_setup_fixed_asset_officer: String,
  asset_setup_status: String,
  uom: String,
  uom_abbr: String,
  ticket_no: String,
  date_requested: String,
  requested_by: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_asset_setup.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_asset_setups',
  hr_asset_setup
);
