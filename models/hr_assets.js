const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Logs = mongoose.model('hr_asset_transaction_logs');

// following name has been changed
// sku_code to plate_number
// vendor_number to vendor_name
// depreciation_date to start_date

const hr_assets = new Schema({
  asset_tag: String,
  asset_type: String,
  asset_description: String,
  asset_serial_number: String,
  asset_manufacturer: String,
  asset_brand: String,
  asset_model: String,
  asset_category_name: String,
  asset_sub_category: String,
  asset_condition: String,
  asset_imagefile: String,
  asset_site: String,
  asset_location: String,
  asset_department_code: String,
  asset_setcheck_default: String,
  asset_transaction_status: String,
  asset_purchase_order: String,
  asset_reasons: String,
  asset_note: String,
  asset_assign_to: String,
  vendor_name: String,
  purchase_order: String,
  purchase_date: String,
  purchase_cost: String,
  initial_value: String,
  salvage_value: String,
  depriciable_value: String,
  depreciation_frequency: String,
  useful_life_span: String,
  depreciation_cost: String,
  current_cost: String,
  asset_attachment: String,
  asset_approval: String,
  date_added: String,
  data_entry_by: String,
  maintenance_requestor: String,
  plate_number: String,
  sku_number: String,
  MaintenanceDueDate: String,
  maintenance_ticket_no: String,
  unit_of_measurement: String,
  unit_of_measurement_amount: String,
  unit_of_measurement_amount_remaining: String,
  assigned_to_temp: String,
  asset_storage: String,
  start_date: String,
  invoice_number: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date,
});

hr_assets.pre('save', async function (next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }

  await new Logs({
    asset_tag: this._id,
    log_date: now,
    log_time: now,
  }).save();
  next();
});

module.exports = mongoose.model('hr_assets', hr_assets);
