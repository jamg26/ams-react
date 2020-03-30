const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_employee_seminar = new Schema({
  seminar_id: Number,
  emp_id: String,
  seminar_date: String,
  seminar_name: String,
  instructor: String,
  seminar_nature: String,
  seminar_cost: String,
  seminar_returningserviceperiod: String,
  correspondingamount: String,
  seminar_note: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_employee_seminar',
  hr_employee_seminar,
  'hr_employee_seminar'
);
