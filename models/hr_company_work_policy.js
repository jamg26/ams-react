const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_company_work_policy = new Schema({
  companybasicid: String,
  work_day_per_year: String,
  work_hour_per_day: String,
  workhourstart: String,
  workhourend: String,
  breakhour: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_company_work_policy.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_company_work_policy',
  hr_company_work_policy
);
