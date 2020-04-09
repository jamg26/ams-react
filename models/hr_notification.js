const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_notification = new Schema({
  notif_id: Number,
  notif_subject: String,
  notif_text: String,
  notif_target: String,
  notif_status: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_notification.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_notification',
  hr_notification,
  'hr_notification'
);
