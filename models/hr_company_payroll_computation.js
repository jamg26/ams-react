const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_company_payroll_computation = new Schema({
  companybasicid: String,
  periodpermonth: String,
  stationaryperiodschedule: String,
  absentdeduction_id: String,
  latededuction_id: String,
  ot_com_option_id: String,
  ot_rate_id: String,
  restday_id: String,
  newhireprorated_id: String,
  newhireprorated_type: String,
  deductabsent: String,
  deductlate: String,
  onethreemonthcomputation_id: String,
  finalcomputation_id: String,
  finalcomputation_deductabsent: String,
  finalcomputation_deductlate: String,
  notif_date: Date,
  work_day_per_month: String,
  created_at: Date,
  updated_at: Date
});
hr_company_payroll_computation.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_company_payroll_computation',
  hr_company_payroll_computation,
  'hr_company_payroll_computation'
);
