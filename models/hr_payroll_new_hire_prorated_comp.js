const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_payroll_new_hire_prorated_comp = new Schema({
  new_hire_prorated_comp_id: String,
  basic_salary: String,
  deminimis: String,
  allowance: String,
  reimbursable_allowance: String,
  ecola: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_payroll_new_hire_prorated_comp.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_payroll_new_hire_prorated_comp',
  hr_payroll_new_hire_prorated_comp,
  'hr_payroll_new_hire_prorated_comp'
);
