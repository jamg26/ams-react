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
hr_employee_email_address.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_employee_email_address',
  hr_employee_email_address
);
