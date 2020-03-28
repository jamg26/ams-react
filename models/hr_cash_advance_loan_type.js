const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_cash_advance_loan_type = new Schema({
  type_id: Number,
  loan_type: String,
  notif_date: {
    type: Date,
    required: true
  },
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_cash_advance_loan_type',
  hr_cash_advance_loan_type,
  'hr_cash_advance_loan_type'
);
