const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_payroll_company_adjustment = new Schema({
  company_adjustment_id: Number,
  company_adjustment_type: String,
  company_adjustment_name: String,
  company_adjustment_code: String,
  company_adjustment_amount: String,
  company_adjustment_applied_before: String,
  company_adjustment_taxable: String,
  company_adjustment_max_amount: String,
  divided_by_period: String,
  company_adjustment_remarks: String,
  adjustment_status: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_payroll_company_adjustment',
  hr_payroll_company_adjustment,
  'hr_payroll_company_adjustment'
);
