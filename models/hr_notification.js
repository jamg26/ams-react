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

module.exports = mongoose.model(
  'hr_notification',
  hr_notification,
  'hr_notification'
);
