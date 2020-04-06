const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_a_digit = new Schema({
  gen_id: String,
  gen_alpha: String,
  gen_count: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_a_digit.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model('hr_a_digit', hr_a_digit, 'hr_a_digit');
