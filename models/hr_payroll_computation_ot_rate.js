const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_payroll_computation_ot_rate = new Schema({
  ot_rate_id: String,
  ord_ot: String,
  ord_nd: String,
  ord_nd_ot: String,
  rd: String,
  rd_ot: String,
  rd_nd: String,
  rd_nd_ot: String,
  sh: String,
  sh_ot: String,
  sh_nd: String,
  sh_nd_ot: String,
  lh: String,
  lh_ot: String,
  lh_nd: String,
  lh_nd_ot: String,
  sh_rd: String,
  sh_rd_ot: String,
  sh_rd_nd: String,
  sh_rd_nd_ot: String,
  lh_rd: String,
  lh_rd_ot: String,
  lh_rd_nd: String,
  lh_rd_nd_ot: String,
  dh: String,
  dh_ot: String,
  dh_nd: String,
  dh_nd_ot: String,
  dh_rd: String,
  dh_rd_ot: String,
  dh_rd_nd: String,
  dh_rd_nd_ot: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});
hr_payroll_computation_ot_rate.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
module.exports = mongoose.model(
  'hr_payroll_computation_ot_rate',
  hr_payroll_computation_ot_rate,
  'hr_payroll_computation_ot_rate'
);
