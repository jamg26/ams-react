const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_employee_leavemanagement = new Schema({
  employee_leavemanagement_id: Number,
  emp_id: String,
  pat_mat_credit: String,
  sick_credit: String,
  leave_credit: String,
  vacation_leave: String,
  pat_mat_rem: String,
  sick_credit_rem: String,
  leave_credit_rem: String,
  vacation_credit_rem: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_employee_leavemanagement',
  hr_employee_leavemanagement,
  'hr_employee_leavemanagement'
);
