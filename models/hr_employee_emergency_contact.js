const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_employee_emergency_contact = new Schema({
  emergency_contact_id: Number,
  emp_id: String,
  phone_number: String,
  contact_person: String,
  relationship: String,
  address: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_employee_emergency_contact.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_employee_emergency_contact',
  hr_employee_emergency_contact,
  'hr_employee_emergency_contact'
);
