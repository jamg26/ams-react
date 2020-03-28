const HrAssets = require('../models/hr_assets');
const HrAssetExtendDueRequest = require('../models/hr_asset_extend_due_request');
const HrAssetPhoto = require('../models/hr_asset_photo');
const HrCashAdvanceLoanType = require('../models/hr_cash_advance_loan_type');
const User = require('../models/users');
const HrReferenceTaxTableDeduction = require('../models/hr_reference_tax_table_deduction');
const hrAssetSetup = require('../models/hr_asset_setup');
const UserAccessRestrictions = require('../models/users_access_restrictions');
const UserLoginLogs = require('../models/user_login_logs');
const HrOtTable = require('../models/hr_ot_table');
const UserCostCenterAccess = require('../models/user_cost_center_access');
const HrAssetRequest = require('../models/hr_asset_request');
const HrADigit = require('../models/hr_a_digit');
const HrAudit = require('../models/hr_audit');
const HrReferenceTaxTableTable = require('../models/hr_reference_tax_table_table');
const HrNotification = require('../models/hr_notification');
const HrAssetTransactionLog = require('../models/hr_asset_transaction_log');
const UserClientAccess = require('../models/user_client_access');
const HrCashAdvancesPayment = require('../models/hr_cash_advances_payment');
const HrEmployeeSalary = require('../models/hr_employee_salary');
const HrEmployeeSalaryDetail = require('../models/hr_employee_salary_detail');
const HrCompanyBank = require('../models/hr_company_bank');
const HrPayrollAdjustmentTemplate = require('../models/hr_payroll_adjustment_template');
const HrAAssetRequest = require('../models/hr_a_asset_request');
const HrEmployeeEducBg = require('../models/hr_employee_educ_bg');
const HrGovtContSss = require('../models/hr_govt_cont_sss');
const HrReferenceGovtOrRecord = require('../models/hr_reference_govt_or_record');
const HrEmployeeScheduleDetail = require('../models/hr_employee_schedule_detail');
const HrPayrollFinalComputation = require('../models/hr_payroll_final_computation');
const HrPayrollComputationOtRate = require('../models/hr_payroll_computation_ot_rate');

describe('Writing in models', () => {
  it('can write users', done => {
    const user = new User({
      name: 'Lorem Ipsum',
      email: 'Lorem Ipsum',
      position: 'Lorem Ipsum',
      email_verified_at: Date.now(),
      password: 'Lorem Ipsum',
      remember_token: 'Lorem Ipsum',
      approved_status: 'Lorem Ipsum',
      access_company_setup: 'Lorem Ipsum',
      access_bulletin: 'Lorem Ipsum',
      access_ceo: 'Lorem Ipsum',
      access_hr: 'Lorem Ipsum',
      access_payroll: 'Lorem Ipsum',
      access_asset_management: 'Lorem Ipsum',
      require_cost_center: 'Lorem Ipsum',
      last_login_at: 'Lorem Ipsum',
      last_login_ip: 'Lorem Ipsum',
      clnt_db_id: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    user
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_assets', done => {
    const asset = new HrAssets({
      asset_tag: 'Lorem Ipsum',
      asset_type: 'Lorem Ipsum',
      asset_description: 'Lorem Ipsum',
      asset_serial_number: 'Lorem Ipsum',
      asset_manufacturer: 'Lorem Ipsum',
      asset_brand: 'Lorem Ipsum',
      asset_model: 'Lorem Ipsum',
      asset_category_name: 'Lorem Ipsum',
      asset_sub_category: 'Lorem Ipsum',
      asset_condition: 'Lorem Ipsum',
      asset_imagefile: 'Lorem Ipsum',
      asset_site: 'Lorem Ipsum',
      asset_location: 'Lorem Ipsum',
      asset_department_code: 'Lorem Ipsum',
      asset_setcheck_defualt: 'Lorem Ipsum',
      asset_transaction_status: 'Lorem Ipsum',
      asset_purchase_order: 'Lorem Ipsum',
      asset_reasons: 'Lorem Ipsum',
      asset_note: 'Lorem Ipsum',
      asset_assign_to: 'Lorem Ipsum',
      vendor_number: 'Lorem Ipsum',
      purchase_order: 'Lorem Ipsum',
      purchase_date: 'Lorem Ipsum',
      purchase_cost: 'Lorem Ipsum',
      initial_value: 'Lorem Ipsum',
      salvage_value: 'Lorem Ipsum',
      depriciable_value: 'Lorem Ipsum',
      depreciation_frequency: 'Lorem Ipsum',
      useful_life_span: 'Lorem Ipsum',
      depreciation_cost: 'Lorem Ipsum',
      current_cost: 'Lorem Ipsum',
      asset_attachment: 'Lorem Ipsum',
      asset_approval: 'Lorem Ipsum',
      date_added: 'Lorem Ipsum',
      data_entry_by: 'Lorem Ipsum',
      maintenance_requestor: 'Lorem Ipsum',
      sku_code: 'Lorem Ipsum',
      sku_number: 'Lorem Ipsum',
      MaintenanceDueDate: 'Lorem Ipsum',
      maintenance_ticket_no: 'Lorem Ipsum',
      unit_of_measurement: 'Lorem Ipsum',
      unit_of_measurement_amount: 'Lorem Ipsum',
      unit_of_measurement_amount_remaining: 'Lorem Ipsum',
      assigned_to_temp: 'Lorem Ipsum',
      asset_storage: 'Lorem Ipsum',
      depreciation_date: 'Lorem Ipsum',
      invoice_number: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    asset
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_asset_extend_due_request', done => {
    const asset = new HrAssetExtendDueRequest({
      extend_due_request_id: 'Lorem Ipsum',
      request_id: 'Lorem Ipsum',
      newduedate: 'Lorem Ipsum',
      request_date: 'Lorem Ipsum',
      request_status: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    asset
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_asset_photo', done => {
    const asset = new HrAssetPhoto({
      asset_photo_id: 'Lorem Ipsum',
      file_name: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    asset
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_cash_advance_loan_type', done => {
    const cash = new HrCashAdvanceLoanType({
      type_id: 22,
      loan_type: '232',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    cash
      .save()
      .then(() => done())
      .catch(err => console.log(err.message));
  });

  it('can write hr_reference_tax_table_deduction', done => {
    const tax = new HrReferenceTaxTableDeduction({
      tax_table_deduction_id: 'Lorem Ipsum',
      one: 'Lorem Ipsum',
      two: 'Lorem Ipsum',
      three: 'Lorem Ipsum',
      four: 'Lorem Ipsum',
      five: 'Lorem Ipsum',
      six: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    tax
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_asset_setup', done => {
    const asset = new hrAssetSetup({
      asset_setup_tag: 'Lorem Ipsum',
      asset_setup_type: 'Lorem Ipsum',
      asset_setup_description: 'Lorem Ipsum',
      asset_setup_sku: 'Lorem Ipsum',
      asset_setup_category: 'Lorem Ipsum',
      asset_setup_site: 'Lorem Ipsum',
      asset_setup_sub_cat: 'Lorem Ipsum',
      asset_setup_ad: 'Lorem Ipsum',
      asset_setup_ac: 'Lorem Ipsum',
      asset_setup_sc: 'Lorem Ipsum',
      asset_setup_location: 'Lorem Ipsum',
      asset_setup_dept: 'Lorem Ipsum',
      asset_setup_logistic_officer: 'Lorem Ipsum',
      asset_setup_fixed_asset_officer: 'Lorem Ipsum',
      asset_setup_status: 'Lorem Ipsum',
      uom: 'Lorem Ipsum',
      uom_abbr: 'Lorem Ipsum',
      ticket_no: 'Lorem Ipsum',
      date_requested: 'Lorem Ipsum',
      requested_by: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    asset
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write users_access_restrictions', done => {
    const restrictions = UserAccessRestrictions({
      user_id: 'Lorem Ipsum',
      approvals: 'Lorem Ipsum',
      journal_entry: 'Lorem Ipsum',
      sales: 'Lorem Ipsum',
      invoice: 'Lorem Ipsum',
      estimate: 'Lorem Ipsum',
      credit_note: 'Lorem Ipsum',
      sales_receipt: 'Lorem Ipsum',
      expense: 'Lorem Ipsum',
      bill: 'Lorem Ipsum',
      supplier_credit: 'Lorem Ipsum',
      pay_bills: 'Lorem Ipsum',
      reports: 'Lorem Ipsum',
      fund_feeds: 'Lorem Ipsum',
      chart_of_accounts: 'Lorem Ipsum',
      cost_center: 'Lorem Ipsum',
      settings: 'Lorem Ipsum',
      procurement_system: 'Lorem Ipsum',
      procurement_sub: 'Lorem Ipsum',
      approval_pending_bills: 'Lorem Ipsum',
      approval_bank: 'Lorem Ipsum',
      approval_coa: 'Lorem Ipsum',
      approval_cc: 'Lorem Ipsum',
      approval_customer: 'Lorem Ipsum',
      approval_supplier: 'Lorem Ipsum',
      approval_product_services: 'Lorem Ipsum',
      approval_sales: 'Lorem Ipsum',
      approval_expense: 'Lorem Ipsum',
      approval_boq: 'Lorem Ipsum',
      user_approval: 'Lorem Ipsum',
      hr_system: 'Lorem Ipsum',
      payroll_system: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    restrictions
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write user_login_logs', done => {
    const logs = new UserLoginLogs({
      user_id: 'Lorem Ipsum',
      last_login_at: 'Lorem Ipsum',
      last_login_ip: 'Lorem Ipsum',
      system: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });
    logs
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_ot_table', done => {
    const table = new HrOtTable({
      dh_id: 'Lorem Ipsum',
      ord: 'Lorem Ipsum',
      ord_ot: 'Lorem Ipsum',
      ord_nd: 'Lorem Ipsum',
      ord_nd_ot: 'Lorem Ipsum',
      rd: 'Lorem Ipsum',
      rd_ot: 'Lorem Ipsum',
      rd_nd: 'Lorem Ipsum',
      rd_nd_ot: 'Lorem Ipsum',
      sh: 'Lorem Ipsum',
      sh_ot: 'Lorem Ipsum',
      sh_nd: 'Lorem Ipsum',
      sh_nd_ot: 'Lorem Ipsum',
      lh: 'Lorem Ipsum',
      lh_ot: 'Lorem Ipsum',
      lh_nd: 'Lorem Ipsum',
      lh_nd_ot: 'Lorem Ipsum',
      sh_rd: 'Lorem Ipsum',
      sh_rd_ot: 'Lorem Ipsum',
      sh_rd_nd: 'Lorem Ipsum',
      sh_rd_nd_ot: 'Lorem Ipsum',
      lh_rd: 'Lorem Ipsum',
      lh_rd_ot: 'Lorem Ipsum',
      lh_rd_nd: 'Lorem Ipsum',
      lh_rd_nd_ot: 'Lorem Ipsum',
      dh: 'Lorem Ipsum',
      dh_ot: 'Lorem Ipsum',
      dh_nd: 'Lorem Ipsum',
      dh_nd_ot: 'Lorem Ipsum',
      dh_rd: 'Lorem Ipsum',
      dh_rd_ot: 'Lorem Ipsum',
      dh_rd_nd: 'Lorem Ipsum',
      dh_rd_nd_ot: 'Lorem Ipsum',
      data_status: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    table
      .save()
      .then(() => done())
      .catch(err => console.log(er));
  });

  it('can write user_cost_center_access', done => {
    const cost = new UserCostCenterAccess({
      use_id: 'Lorem Ipsum',
      cost_center_id: 'Lorem Ipsum',
      access_status: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    cost
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_asset_request', done => {
    const request = new HrAssetRequest({
      request_id: 'Lorem Ipsum',
      emp_id: 'Lorem Ipsum',
      asset_tag: 'Lorem Ipsum',
      asset_remaining_amount: 'Lorem Ipsum',
      asset_borrow_date: Date.now(),
      asset_due_date: Date.now(),
      request_status: 'Lorem Ipsum',
      request_active: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    request
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_a_digit', done => {
    const digit = new HrADigit({
      gen_id: 'Lorem Ipsum',
      gen_alpha: 'Lorem Ipsum',
      gen_count: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    digit
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_audit', done => {
    const audit = new HrAudit({
      audit_window_name: 'Lorem Ipsum',
      audit_asset_tag: 'Lorem Ipsum',
      audit_date: 'Lorem Ipsum',
      audit_location: 'Lorem Ipsum',
      audit_site: 'Lorem Ipsum',
      audit_note: 'Lorem Ipsum',
      audit_check: 'Lorem Ipsum',
      audit_action_date: 'Lorem Ipsum',
      audit_action: 'Lorem Ipsum',
      audit_move_employee: 'Lorem Ipsum',
      audit_move_department: 'Lorem Ipsum',
      audit_action_note: 'Lorem Ipsum',
      audit_action_reason: 'Lorem Ipsum',
      audit_status: 'Lorem Ipsum',
      maintenanceduedate: 'Lorem Ipsum',
      auditor: 'Lorem Ipsum',
      transaction: 'Lorem Ipsum',
      requestor: 'Lorem Ipsum',
      audit_approval: 'Lorem Ipsum',
      audit_ticket_no: 'Lorem Ipsum',
      audit_finish: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    audit
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_reference_tax_table_table', done => {
    const table = new HrReferenceTaxTableTable({
      tax_table_table_id: 'Lorem Ipsum',
      one: 'Lorem Ipsum',
      two: 'Lorem Ipsum',
      three: 'Lorem Ipsum',
      four: 'Lorem Ipsum',
      five: 'Lorem Ipsum',
      six: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    table
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_notification', done => {
    const notification = new HrNotification({
      notif_id: 123,
      notif_subject: 'Lorem Ipsum',
      notif_text: 'Lorem Ipsum',
      notif_target: 'Lorem Ipsum',
      notif_status: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    notification
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_asset_transaction_log', done => {
    const log = new HrAssetTransactionLog({
      asset_transaction_log_id: 'Lorem Ipsum',
      asset_tag: 'Lorem Ipsum',
      log_date: 'Lorem Ipsum',
      log_time: 'Lorem Ipsum',
      audit_action_date: 'Lorem Ipsum',
      log_action: 'Lorem Ipsum',
      log_action_requestor_id: 'Lorem Ipsum',
      log_action_requestor: 'Lorem Ipsum',
      transaction_action: 'Lorem Ipsum',
      transaction_ticket_no: 'Lorem Ipsum',
      deny_reason: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    log
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write user_client_access', done => {
    const access = new UserClientAccess({
      user_id: 'Lorem Ipsum',
      client_id: 'Lorem Ipsum',
      access_status: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    access
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_cash_advances_payment', done => {
    const cash = new HrCashAdvancesPayment({
      cash_advance_payment_id: 123,
      cash_advance_id: 'Lorem Ipsum',
      amount: 'Lorem Ipsum',
      date_recorded: 'Lorem Ipsum',
      payroll_id: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    cash
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('cam write hr_employee_salary', done => {
    const salary = new HrEmployeeSalary({
      salary_id: 123,
      emp_id: 'Lorem Ipsum',
      payroll_id: 'Lorem Ipsum',
      salary_status: 'Lorem Ipsum',
      notif_date: Date.now(),
      salary_initial_status: 'Lorem Ipsum',
      salary_include_note: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    salary
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_employee_salary_detail', done => {
    const salary = new HrEmployeeSalaryDetail({
      salary_detail_id: 123,
      emp_id: 'Lorem Ipsum',
      tax_type: 'Lorem Ipsum',
      workdayperyear: 'Lorem Ipsum',
      ot_com_table: 'Lorem Ipsum',
      pagibigcont: 'Lorem Ipsum',
      minwage: 'Lorem Ipsum',
      basic_salary: 'Lorem Ipsum',
      sss_contribution: 'Lorem Ipsum',
      add_pagibig_cont: 'Lorem Ipsum',
      ecola: 'Lorem Ipsum',
      deminimis_total: 'Lorem Ipsum',
      philhealth_contribution: 'Lorem Ipsum',
      bank: 'Lorem Ipsum',
      bank_type: 'Lorem Ipsum',
      bank_acc_number: 'Lorem Ipsum',
      meal_allowance: 'Lorem Ipsum',
      mobile_allowance: 'Lorem Ipsum',
      cash_allowance: 'Lorem Ipsum',
      travel_allowance: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now(),
      notif_date: Date.now()
    });

    salary
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_company_bank', done => {
    const bank = new HrCompanyBank({
      company_bank_id: 123,
      bank_name: 'Lorem Ipsum',
      bank_code: 'Lorem Ipsum',
      account_number: 'Lorem Ipsum',
      company_code: 'Lorem Ipsum',
      presenting_office: 'Lorem Ipsum',
      bank_remarks: 'Lorem Ipsum',
      notif_date: Date.now(),
      data_status: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    bank
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_payroll_adjustment_template', done => {
    const template = new HrPayrollAdjustmentTemplate({
      template_id: 123,
      template_type: 'Lorem Ipsum',
      template_name: 'Lorem Ipsum',
      template_code: 'Lorem Ipsum',
      template_amount: 'Lorem Ipsum',
      applied_before: 'Lorem Ipsum',
      taxable: 'Lorem Ipsum',
      template_max_amount: 'Lorem Ipsum',
      divided_by_period: 'Lorem Ipsum',
      template_remarks: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    template
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_a_asset_request', done => {
    const request = new HrAAssetRequest({
      id: 123,
      request_id: 'Lorem Ipsum',
      emp_id: 'Lorem Ipsum',
      asset_tag: 'Lorem Ipsum',
      asset_remaining_amount: 'Lorem Ipsum',
      asset_borrow_date: 'Lorem Ipsum',
      asset_due_date: 'Lorem Ipsum',
      request_status: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    request
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_employee_educ_bg', done => {
    const educ = new HrEmployeeEducBg({
      educ_bg_id: 123,
      emp_id: 'Lorem Ipsum',
      type: 'Lorem Ipsum',
      school_name: 'Lorem Ipsum',
      study_from: 'Lorem Ipsum',
      study_to: 'Lorem Ipsum',
      degree: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    educ
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_govt_cont_sss', done => {
    const cont = new HrGovtContSss({
      govt_sss_id: 'Lorem Ipsum',
      basic_salary: 'Lorem Ipsum',
      bonus: 'Lorem Ipsum',
      absent_late: 'Lorem Ipsum',
      overtime: 'Lorem Ipsum',
      salary_adjustment: 'Lorem Ipsum',
      deminimis: 'Lorem Ipsum',
      allowance: 'Lorem Ipsum',
      commission: 'Lorem Ipsum',
      reimbursable_allowance: 'Lorem Ipsum',
      ecola: 'Lorem Ipsum',
      notif_date: Date.now(),
      deduction_period: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    cont
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_reference_govt_or_record', done => {
    const reference = new HrReferenceGovtOrRecord({
      govt_or_record_id: 123,
      month: 'Lorem Ipsum',
      year: 'Lorem Ipsum',
      sss_or: 'Lorem Ipsum',
      sss_date: 'Lorem Ipsum',
      sss_loan_or: 'Lorem Ipsum',
      sss_loan_date: 'Lorem Ipsum',
      sss_cal_loan_or: 'Lorem Ipsum',
      sss_cal_loan_date: 'Lorem Ipsum',
      philhealth_or: 'Lorem Ipsum',
      philhealth_date: 'Lorem Ipsum',
      hdmf_or: 'Lorem Ipsum',
      hdmf_date: 'Lorem Ipsum',
      hdmf_loan_or: 'Lorem Ipsum',
      hdmf_loan_date: 'Lorem Ipsum',
      hdmf_cal_loan_or: 'Lorem Ipsum',
      hdmf_cal_loan_date: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now(),
      sss_file: 'Lorem Ipsum',
      sss_loan_file: 'Lorem Ipsum',
      sss_cal_loan: 'Lorem Ipsum',
      philhealth_file: 'Lorem Ipsum',
      hdmf_file: 'Lorem Ipsum',
      hdmf_loan_file: 'Lorem Ipsum',
      hdmf_cal_loan: 'Lorem Ipsum'
    });

    reference
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_employee_schedule_detail', done => {
    const schedule = new HrEmployeeScheduleDetail({
      emp_id: 'Lorem Ipsum',
      day_id: 'Lorem Ipsum',
      core_from: 'Lorem Ipsum',
      core_to: 'Lorem Ipsum',
      break_start: 'Lorem Ipsum',
      break_end: 'Lorem Ipsum',
      is_rest_day: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    schedule
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_payroll_final_computation', done => {
    const payroll = new HrPayrollFinalComputation({
      final_computation_id: 'Lorem Ipsum',
      basic_salary: 'Lorem Ipsum',
      deminimis: 'Lorem Ipsum',
      allowance: 'Lorem Ipsum',
      reimbursable_allowance: 'Lorem Ipsum',
      ecola: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    payroll
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_payroll_computation_ot_rate', done => {
    const payroll = new HrPayrollComputationOtRate({
      ot_rate_id: 'Lorem Ipsum',
      ord_ot: 'Lorem Ipsum',
      ord_nd: 'Lorem Ipsum',
      ord_nd_ot: 'Lorem Ipsum',
      rd: 'Lorem Ipsum',
      rd_ot: 'Lorem Ipsum',
      rd_nd: 'Lorem Ipsum',
      rd_nd_ot: 'Lorem Ipsum',
      sh: 'Lorem Ipsum',
      sh_ot: 'Lorem Ipsum',
      sh_nd: 'Lorem Ipsum',
      sh_nd_ot: 'Lorem Ipsum',
      lh: 'Lorem Ipsum',
      lh_ot: 'Lorem Ipsum',
      lh_nd: 'Lorem Ipsum',
      lh_nd_ot: 'Lorem Ipsum',
      sh_rd: 'Lorem Ipsum',
      sh_rd_ot: 'Lorem Ipsum',
      sh_rd_nd: 'Lorem Ipsum',
      sh_rd_nd_ot: 'Lorem Ipsum',
      lh_rd: 'Lorem Ipsum',
      lh_rd_ot: 'Lorem Ipsum',
      lh_rd_nd: 'Lorem Ipsum',
      lh_rd_nd_ot: 'Lorem Ipsum',
      dh: 'Lorem Ipsum',
      dh_ot: 'Lorem Ipsum',
      dh_nd: 'Lorem Ipsum',
      dh_nd_ot: 'Lorem Ipsum',
      dh_rd: 'Lorem Ipsum',
      dh_rd_ot: 'Lorem Ipsum',
      dh_rd_nd: 'Lorem Ipsum',
      dh_rd_nd_ot: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    payroll
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });
});
