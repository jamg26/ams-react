const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_payroll_adjustment_template = new Schema({
  template_id: Number,
  template_type: String,
  template_name: String,
  template_code: String,
  template_amount: String,
  applied_before: String,
  taxable: String,
  template_max_amount: String,
  divided_by_period: String,
  template_remarks: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_payroll_adjustment_template',
  hr_payroll_adjustment_template,
  'hr_payroll_adjustment_template'
);
