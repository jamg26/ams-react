const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  position: String,
  email_verified_at: Date,
  password: String,
  remember_token: String,
  approved_status: String,
  access_company_setup: String,
  access_bulletin: String,
  access_ceo: String,
  access_hr: String,
  access_payroll: String,
  access_asset_management: String,
  require_cost_center: String,
  last_login_at: String,
  last_login_ip: String,
  clnt_db_id: String,
  created_at: Date,
  updated_at: Date
});
userSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model('users', userSchema);
