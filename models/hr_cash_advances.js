const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_cash_advances = new Schema({
  cash_advance_id: Number,
  loan_type: String,
  emp_id: String,
  lender_id: String,
  date_of_request: String,
  start_of_deduction: String,
  end_of_deduction: String,
  total_amount: String,
  pay_period: String,
  pay_amount_per_period: String,
  balance: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('hr_cash_advances', hr_cash_advances);
