const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_employee_info = new Schema({
  employee_id: Number,
  biometrics_id: String,
  company_id: String,
  fname: String,
  mname: String,
  lname: String,
  gender: String,
  civil_status: String,
  date_of_birth: String,
  address: String,
  username: String,
  password: String,
  lock_user: String,
  photofilename: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_employee_info.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_employee_info',
  hr_employee_info,
  'hr_employee_info'
);
