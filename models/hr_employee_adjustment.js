const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_employee_adjustment = new Schema({
  employee_adjustment_id: Number,
  employee_adjustment_type: String,
  employee_adjustment_name: String,
  employee_adjustment_code: String,
  employee_adjustment_amount: String,
  employee_adjustment_apply_before: String,
  employee_adjustment_taxable: String,
  employee_adjustment_remarks: String,
  employee_adjustment_payroll_id: String,
  employee_adjustment_emp_id: String,
  employee_adjustment_active: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_employee_adjustment.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_employee_adjustment',
  hr_employee_adjustment,
  'hr_employee_adjustment'
);
