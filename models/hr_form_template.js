const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_form_template = new Schema({
  form_template_id: Number,
  form_template_name: String,
  form_template_content: String,
  form_template_created_at: Date,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_form_template.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_form_template',
  hr_form_template,
  'hr_form_template'
);
