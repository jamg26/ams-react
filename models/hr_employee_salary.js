const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_employee_salary = new Schema({
  salary_id: Number,
  emp_id: String,
  payroll_id: String,
  salary_status: String,
  notif_date: Date,
  salary_initial_status: String,
  salary_include_note: String,
  created_at: Date,
  updated_at: Date
});
hr_employee_salary.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_employee_salary',
  hr_employee_salary,
  'hr_employee_salary'
);
