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

module.exports = mongoose.model(
  'hr_payroll_new_hire_prorated_comp',
  hr_payroll_new_hire_prorated_comp,
  'hr_payroll_new_hire_prorated_comp'
);
