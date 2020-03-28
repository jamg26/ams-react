const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_asset_photo = new Schema({
  asset_photo_id: String,
  file_name: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_asset_photo',
  hr_asset_photo,
  'hr_asset_photo'
);
