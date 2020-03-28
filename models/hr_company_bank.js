const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_company_bank = new Schema({
  company_bank_id: Number,
  bank_name: String,
  bank_code: String,
  account_number: String,
  company_code: String,
  presenting_office: String,
  bank_remarks: String,
  notif_date: Date,
  data_status: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_company_bank',
  hr_company_bank,
  'hr_company_bank'
);
