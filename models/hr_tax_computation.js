const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_tax_computation = new Schema({
  tax_computation_id: String,
  use_annual_tax_table: String,
  non_tax_exemption_ceiling: String,
  start_of_annualization: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_tax_computation',
  hr_tax_computation,
  'hr_tax_computation'
);
