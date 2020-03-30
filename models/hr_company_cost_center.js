const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_company_cost_center = new Schema({
  cost_center_id: Number,
  cost_center_name: String,
  cost_center_code: String,
  cost_center_remarks: String,
  notif_date: Date,
  data_status: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_company_cost_center',
  hr_company_cost_center,
  'hr_company_cost_center'
);
