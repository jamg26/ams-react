const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_audit = new Schema({
  audit_window_name: String,
  audit_asset_tag: String,
  audit_date: String,
  audit_location: String,
  audit_site: String,
  audit_note: String,
  audit_check: String,
  audit_action_date: String,
  audit_action: String,
  audit_move_employee: String,
  audit_move_department: String,
  audit_action_note: String,
  audit_action_reason: String,
  audit_status: String,
  maintenanceduedate: String,
  auditor: String,
  transaction: String,
  requestor: String,
  audit_approval: String,
  audit_ticket_no: String,
  audit_finish: String,
  notif_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('hr_audit', hr_audit, 'hr_audit');
