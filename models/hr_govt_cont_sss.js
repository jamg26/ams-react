const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_govt_cont_sss = new Schema({
  govt_sss_id: String,
  basic_salary: String,
  bonus: String,
  absent_late: String,
  overtime: String,
  salary_adjustment: String,
  deminimis: String,
  allowance: String,
  commission: String,
  reimbursable_allowance: String,
  ecola: String,
  notif_date: Date,
  deduction_period: String,
  created_at: Date,
  updated_at: Date
});
hr_govt_cont_sss.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model('hr_govt_cont_sss', hr_govt_cont_sss);
