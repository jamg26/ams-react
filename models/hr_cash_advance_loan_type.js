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
hr_cash_advance_loan_type.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_cash_advance_loan_type',
  hr_cash_advance_loan_type,
  'hr_cash_advance_loan_type'
);
