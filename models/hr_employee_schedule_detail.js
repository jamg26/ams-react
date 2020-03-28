const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_employee_schedule_detail = new Schema({
  emp_id: String,
  day_id: String,
  core_from: String,
  core_to: String,
  break_start: String,
  break_end: String,
  is_rest_day: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_employee_schedule_detail',
  hr_employee_schedule_detail,
  'hr_employee_schedule_detail'
);
