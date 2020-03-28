const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_employee_salary_detail = new Schema({
  salary_detail_id: Number,
  emp_id: String,
  tax_type: String,
  workdayperyear: String,
  ot_com_table: String,
  pagibigcont: String,
  minwage: String,
  basic_salary: String,
  sss_contribution: String,
  add_pagibig_cont: String,
  ecola: String,
  deminimis_total: String,
  philhealth_contribution: String,
  bank: String,
  bank_type: String,
  bank_acc_number: String,
  meal_allowance: String,
  mobile_allowance: String,
  cash_allowance: String,
  travel_allowance: String,
  created_at: Date,
  updated_at: Date,
  notif_date: Date
});

module.exports = mongoose.model(
  'hr_employee_salary_detail',
  hr_employee_salary_detail,
  'hr_employee_salary_detail'
);
