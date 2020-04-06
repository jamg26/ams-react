const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_asset_photo = new Schema({
  asset_photo_id: String,
  file_name: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_asset_photo.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_asset_photo',
  hr_asset_photo,
  'hr_asset_photo'
);
