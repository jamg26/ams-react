const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_payroll_onethreeth_month_comp = new Schema({
  thirteenth_month_id: String,
  basic: String,
  basic_adjustment: String,
  overtime: String,
  late_undertime: String,
  deminimis: String,
  allowance_reimbursable_allowance: String,
  bonus: String,
  commission: String,
  ecola: String,
  other_taxable_income: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_payroll_onethreeth_month_comp.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_payroll_onethreeth_month_comp',
  hr_payroll_onethreeth_month_comp,
  'hr_payroll_onethreeth_month_comp'
);
