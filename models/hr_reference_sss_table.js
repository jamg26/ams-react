const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_reference_sss_table = new Schema({
  sss_table_id: Number,
  min_range: String,
  max_range: String,
  monthly_salary_credit: String,
  ss_er: String,
  ss_ee: String,
  ss_total: String,
  ec_er: String,
  total_contribution: String,
  seumofw_total_contribution: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_reference_sss_table.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_reference_sss_table',
  hr_reference_sss_table,
  'hr_reference_sss_table'
);
