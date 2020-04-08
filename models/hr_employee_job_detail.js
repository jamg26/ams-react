const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_employee_job_detail = new Schema({
  job_detail_id: Number,
  emp_id: String,
  position: String,
  department: String,
  cost_center: String,
  start_date: String,
  employment_status: String,
  status_effectve_date: String,
  daily_hour: String,
  employee_type: String,
  rohq: String,
  consultant: String,
  tin_number: String,
  philhealth_number: String,
  sss_number: String,
  hdmf_number: String,
  prc_license: String,
  passport: String,
  sl: String,
  vl: String,
  leave_credit: String,
  schedule_type: String,
  no_of_hours_to_work: String,
  notif_date: Date,
  report_to: String,
  atc_s: String,
  atc_se: String,
  atc_sf: String,
  atc_swat: String,
  atc_s_se: String,
  atc_s_ss: String,
  atc_s_cf_status_code: String,
  atc_s_cf_V: String,
  atc_s_cf_VI: String,
  region: String,
  created_at: Date,
  updated_at: Date
});
hr_employee_job_detail.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_employee_job_detail',
  hr_employee_job_detail,
  'hr_employee_job_detail'
);
