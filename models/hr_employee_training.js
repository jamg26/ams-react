const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_employee_training = new Schema({
  training_id: Number,
  emp_id: String,
  training_date: String,
  training_name: String,
  instructor: String,
  training_nature: String,
  training_cost: String,
  training_returningserviceperiod: String,
  correspondingamount: String,
  training_note: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_employee_training.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_employee_training',
  hr_employee_training,
  'hr_employee_training'
);
