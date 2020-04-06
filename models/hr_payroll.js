const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_payroll = new Schema({
  payroll_id: Number,
  payroll_year: String,
  payroll_month: String,
  employee_type: String,
  period: String,
  description: String,
  payroll_type: String,
  transaction_date: String,
  transaction_from: String,
  transaction_to: String,
  com_phic: String,
  com_sss: String,
  com_pagibig: String,
  com_tax: String,
  com_end_of_month: String,
  use_annual_calculation: String,
  post_status: String,
  process_status: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_payroll.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model('hr_payroll', hr_payroll, 'hr_payroll');
