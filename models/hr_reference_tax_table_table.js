const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_reference_tax_table_table = new Schema({
  tax_table_table_id: String,
  one: String,
  two: String,
  three: String,
  four: String,
  five: String,
  six: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_reference_tax_table_table.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_reference_tax_table_table',
  hr_reference_tax_table_table,
  'hr_reference_tax_table_table'
);
