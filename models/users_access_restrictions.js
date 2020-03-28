const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users_access_restrictions = new Schema({
  user_id: String,
  approvals: String,
  journal_entry: String,
  sales: String,
  invoice: String,
  estimate: String,
  credit_note: String,
  sales_receipt: String,
  expense: String,
  bill: String,
  supplier_credit: String,
  pay_bills: String,
  reports: String,
  fund_feeds: String,
  chart_of_accounts: String,
  cost_center: String,
  settings: String,
  procurement_system: String,
  procurement_sub: String,
  approval_pending_bills: String,
  approval_bank: String,
  approval_coa: String,
  approval_cc: String,
  approval_customer: String,
  approval_supplier: String,
  approval_product_services: String,
  approval_sales: String,
  approval_expense: String,
  approval_boq: String,
  user_approval: String,
  hr_system: String,
  payroll_system: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'users_access_restrictions',
  users_access_restrictions
);
