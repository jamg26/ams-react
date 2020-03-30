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

module.exports = mongoose.model(
  'hr_company_work_policy',
  hr_company_work_policy
);
