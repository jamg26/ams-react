const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_payroll_computation_restday = new Schema({
  restday_id: String,
  sunday: String,
  monday: String,
  tuesday: String,
  wednesday: String,
  thursday: String,
  friday: String,
  saturday: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_payroll_computation_restday',
  hr_payroll_computation_restday,
  'hr_payroll_computation_restday'
);
