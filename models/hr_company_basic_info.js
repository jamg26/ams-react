const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hr_company_basic_info = new Schema({
  companybasicid: String,
  companylogofilename: String,
  companyname: String,
  natureofbusiness: String,
  address1: String,
  address2: String,
  zipcode: String,
  rdo: String,
  email: String,
  phone: String,
  fax: String,
  tin_number: String,
  sss_number: String,
  philhealth_number: String,
  hdmf: String,
  admin_signatory_name: String,
  admin_signatory_position: String,
  hr_signatory_name: String,
  hr_signatory_position: String,
  finance_signatory_name: String,
  finance_signatory_position: String,
  sss_contribution: String,
  philhealth_contribution: String,
  esignatoryfilename: String,
  hdmf_equ_empr_share: String,
  hdmf_share_value: String,
  notif_date: Date,
  deduction_period: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model(
  'hr_company_basic_info',
  hr_company_basic_info,
  'hr_company_basic_info'
);
