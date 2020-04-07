const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_memo = new Schema({
  memo_id: Number,
  memo_title: String,
  memo_employee: String,
  memo_date_recieved: String,
  memo_offense_level: String,
  memo_da_type: String,
  memo_violation_category: String,
  memo_slide_date: String,
  memo_note: String,
  memo_created_at: Date,
  notif_date: Date,
  data_status: String,
  created_at: Date,
  updated_at: Date
});
hr_memo.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model('hr_memo', hr_memo, 'hr_memo');
