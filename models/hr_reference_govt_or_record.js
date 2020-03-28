const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_reference_govt_or_record = new Schema({
  govt_or_record_id: Number,
  month: String,
  year: String,
  sss_or: String,
  sss_date: String,
  sss_loan_or: String,
  sss_loan_date: String,
  sss_cal_loan_or: String,
  sss_cal_loan_date: String,
  philhealth_or: String,
  philhealth_date: String,
  hdmf_or: String,
  hdmf_date: String,
  hdmf_loan_or: String,
  hdmf_loan_date: String,
  hdmf_cal_loan_or: String,
  hdmf_cal_loan_date: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date,
  sss_file: String,
  sss_loan_file: String,
  sss_cal_loan: String,
  philhealth_file: String,
  hdmf_file: String,
  hdmf_loan_file: String,
  hdmf_cal_loan: String
});

module.exports = mongoose.model(
  'hr_reference_govt_or_record',
  hr_reference_govt_or_record,
  'hr_reference_govt_or_record'
);
