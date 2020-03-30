const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_payroll_computation_late_deduct = new Schema({
  latededuct_id: String,
  basic_salary: String,
  deminimis: String,
  allowance: String,
  reimbursable_allowance: String,
  ecola: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_payroll_computation_late_deduct',
  hr_payroll_computation_late_deduct,
  'hr_payroll_computation_late_deduct'
);
