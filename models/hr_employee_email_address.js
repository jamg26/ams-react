const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_employee_email_address = new Schema({
  email_address_id: Number,
  emp_id: String,
  email: String,
  type: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_employee_email_address',
  hr_employee_email_address
);
