const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_employee_educ_bg = new Schema({
  educ_bg_id: Number,
  emp_id: String,
  type: String,
  school_name: String,
  study_from: String,
  study_to: String,
  degree: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_employee_educ_bg.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_employee_educ_bg',
  hr_employee_educ_bg,
  'hr_employee_educ_bg'
);
