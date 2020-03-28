const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_cash_advances_payment = new Schema({
  cash_advance_payment_id: Number,
  cash_advance_id: String,
  amount: String,
  date_recorded: String,
  payroll_id: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_cash_advances_payment',
  hr_cash_advances_payment,
  'hr_cash_advances_payment'
);
