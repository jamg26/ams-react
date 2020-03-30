const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_company_department = new Schema({
  department_id: String,
  department_name: String,
  department_code: String,
  department_remarks: String,
  notif_date: Date,
  data_status: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_company_department',
  hr_company_department,
  'hr_company_department'
);
