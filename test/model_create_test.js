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
const HrCompanyDepartment = require('../models/hr_company_department');
const HrPayrollComputationLateDeduct = require('../models/hr_payroll_computation_late_deduct');
const HrPayrollCompanyAdjustment = require('../models/hr_payroll_company_adjustment');
const HrEmployeeAttendance = require('../models/hr_employee_attendance');
const HrCompanyWorkPolicy = require('../models/hr_company_work_policy');
const HrCompanyCostCenter = require('../models/hr_company_cost_center');
const HrCashAdvances = require('../models/hr_cash_advances');
const HrPayrollOneThreethMonthComp = require('../models/hr_payroll_onethreeth_month_comp');
const HrEmployeeAlternateContact = require('../models/hr_employee_alternate_contact');
const HrGovtContPhilhealth = require('../models/hr_govt_cont_philhealth');
const HrPayrollComputationOtCompOption = require('../models/hr_payroll_computation_ot_comp_option');
const HrPayrollComputationAbsentDeduct = require('../models/hr_payroll_computation_absent_deduct');
const HrEmployeeAdjustment = require('../models/hr_employee_adjustment');
const HrEmployeeTraining = require('../models/hr_employee_training');
const HrMemo = require('../models/hr_memo');
const HrAssetTransferRequest = require('../models/hr_asset_transfer_request');
const HrEmployeeInfo = require('../models/hr_employee_info');
const HrTaxComputation = require('../models/hr_tax_computation');
const HrEmployeeEmailAddress = require('../models/hr_employee_email_address');
const HrCompanyPayrollComputation = require('../models/hr_company_payroll_computation');
const HrPayroll = require('../models/hr_payroll');
const HrEmployeeSeminar = require('../models/hr_employee_seminar');
const HrPayrollNewHireProratedComp = require('../models/hr_payroll_new_hire_prorated_comp');
const HrFormTemplate = require('../models/hr_form_template');
const HrEmployeeLeaveManagement = require('../models/hr_employee_leavemanagement');
const HrEmployeeJobDetail = require('../models/hr_employee_job_detail');
const HrPayrollComputationRestday = require('../models/hr_payroll_computation_restday');
const HrCompanyBasicInfo = require('../models/hr_company_basic_info');
const HrReferenceSSSTable = require('../models/hr_reference_sss_table');
const HrEmployeeEmergencyContact = require('../models/hr_employee_emergency_contact');

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

  it('can write hr_employee_salary', done => {
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

  it('can write hr_company_department', done => {
    const department = new HrCompanyDepartment({
      department_id: 'Lorem Ipsum',
      department_name: 'Lorem Ipsum',
      department_code: 'Lorem Ipsum',
      department_remarks: 'Lorem Ipsum',
      notif_date: Date.now(),
      data_status: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    department
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_payroll_computation_late_deduct', done => {
    const payroll = new HrPayrollComputationLateDeduct({
      latededuct_id: 'Lorem Ipsum',
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

  it('can write hr_payroll_company_adjustment', done => {
    const payroll = new HrPayrollCompanyAdjustment({
      company_adjustment_id: 123,
      company_adjustment_type: 'Lorem Ipsum',
      company_adjustment_name: 'Lorem Ipsum',
      company_adjustment_code: 'Lorem Ipsum',
      company_adjustment_amount: 'Lorem Ipsum',
      company_adjustment_applied_before: 'Lorem Ipsum',
      company_adjustment_taxable: 'Lorem Ipsum',
      company_adjustment_max_amount: 'Lorem Ipsum',
      divided_by_period: 'Lorem Ipsum',
      company_adjustment_remarks: 'Lorem Ipsum',
      adjustment_status: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    payroll
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_employee_attendance', done => {
    const attendance = new HrEmployeeAttendance({
      employee_attendance_id: 123,
      emp_id: 'Lorem Ipsum',
      attendance_date: 'Lorem Ipsum',
      attendance_time_in: 'Lorem Ipsum',
      attendance_time_out: 'Lorem Ipsum',
      attendance_type: 'Lorem Ipsum',
      attendance_status: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    attendance
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_company_work_policy', done => {
    const policy = new HrCompanyWorkPolicy({
      companybasicid: 'Lorem Ipsum',
      work_day_per_year: 'Lorem Ipsum',
      work_hour_per_day: 'Lorem Ipsum',
      workhourstart: 'Lorem Ipsum',
      workhourend: 'Lorem Ipsum',
      breakhour: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    policy
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_company_cost_center', done => {
    const cost = new HrCompanyCostCenter({
      cost_center_id: 123,
      cost_center_name: 'Lorem Ipsum',
      cost_center_code: 'Lorem Ipsum',
      cost_center_remarks: 'Lorem Ipsum',
      notif_date: Date.now(),
      data_status: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    cost
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_cash_advances', done => {
    const advances = new HrCashAdvances({
      cash_advance_id: 123,
      loan_type: 'Lorem Ipsum',
      emp_id: 'Lorem Ipsum',
      lender_id: 'Lorem Ipsum',
      date_of_request: 'Lorem Ipsum',
      start_of_deduction: 'Lorem Ipsum',
      end_of_deduction: 'Lorem Ipsum',
      total_amount: 'Lorem Ipsum',
      pay_period: 'Lorem Ipsum',
      pay_amount_per_period: 'Lorem Ipsum',
      balance: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    advances
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_payroll_onethreeth_month_comp', done => {
    const payroll = new HrPayrollOneThreethMonthComp({
      thirteenth_month_id: 'Lorem Ipsum',
      basic: 'Lorem Ipsum',
      basic_adjustment: 'Lorem Ipsum',
      overtime: 'Lorem Ipsum',
      late_undertime: 'Lorem Ipsum',
      deminimis: 'Lorem Ipsum',
      allowance_reimbursable_allowance: 'Lorem Ipsum',
      bonus: 'Lorem Ipsum',
      commission: 'Lorem Ipsum',
      ecola: 'Lorem Ipsum',
      other_taxable_income: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    payroll
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_employee_alternate_contact', done => {
    const contact = new HrEmployeeAlternateContact({
      alternate_contact_id: 123,
      emp_id: 'Lorem Ipsum',
      phone_number: 'Lorem Ipsum',
      contact_person: 'Lorem Ipsum',
      type: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    contact
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_govt_cont_philhealth', done => {
    const cont = new HrGovtContPhilhealth({
      govt_ph_id: 'Lorem Ipsum',
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

  it('can write hr_payroll_computation_ot_comp_option', done => {
    const payroll = new HrPayrollComputationOtCompOption({
      ot_comp_option_id: 'Lorem Ipsum',
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

  it('can write hr_payroll_computation_absent_deduct', done => {
    const payroll = new HrPayrollComputationAbsentDeduct({
      absentdeduct_id: 'Lorem Ipsum',
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

  it('can write hr_employee_adjustment', done => {
    const adjustment = new HrEmployeeAdjustment({
      employee_adjustment_id: 123,
      employee_adjustment_type: 'Lorem Ipsum',
      employee_adjustment_name: 'Lorem Ipsum',
      employee_adjustment_code: 'Lorem Ipsum',
      employee_adjustment_amount: 'Lorem Ipsum',
      employee_adjustment_apply_before: 'Lorem Ipsum',
      employee_adjustment_taxable: 'Lorem Ipsum',
      employee_adjustment_remarks: 'Lorem Ipsum',
      employee_adjustment_payroll_id: 'Lorem Ipsum',
      employee_adjustment_emp_id: 'Lorem Ipsum',
      employee_adjustment_active: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    adjustment
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_employee_training', done => {
    const training = new HrEmployeeTraining({
      training_id: 123,
      emp_id: 'Lorem Ipsum',
      training_date: 'Lorem Ipsum',
      training_name: 'Lorem Ipsum',
      instructor: 'Lorem Ipsum',
      training_nature: 'Lorem Ipsum',
      training_cost: 'Lorem Ipsum',
      training_returningserviceperiod: 'Lorem Ipsum',
      correspondingamount: 'Lorem Ipsum',
      training_note: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    training
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_memo', done => {
    const memo = new HrMemo({
      memo_id: 123,
      memo_title: 'Lorem Ipsum',
      memo_employee: 'Lorem Ipsum',
      memo_date_recieved: 'Lorem Ipsum',
      memo_offense_level: 'Lorem Ipsum',
      memo_da_type: 'Lorem Ipsum',
      memo_violation_category: 'Lorem Ipsum',
      memo_slide_date: 'Lorem Ipsum',
      memo_note: 'Lorem Ipsum',
      memo_created_at: Date.now(),
      notif_date: Date.now(),
      data_status: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    memo
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_asset_transfer_request', done => {
    const asset = new HrAssetTransferRequest({
      asset_transfer_request_id: 'Lorem Ipsum',
      asset_tag: 'Lorem Ipsum',
      asset_location: 'Lorem Ipsum',
      asset_site: 'Lorem Ipsum',
      asset_department_code: 'Lorem Ipsum',
      asset_note: 'Lorem Ipsum',
      asset_assign_to: 'Lorem Ipsum',
      asset_transfer_request_status: 'Lorem Ipsum',
      request_date: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    asset
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_employee_info', done => {
    const info = new HrEmployeeInfo({
      employee_id: 123,
      biometrics_id: 'Lorem Ipsum',
      company_id: 'Lorem Ipsum',
      fname: 'Lorem Ipsum',
      mname: 'Lorem Ipsum',
      lname: 'Lorem Ipsum',
      gender: 'Lorem Ipsum',
      civil_status: 'Lorem Ipsum',
      date_of_birth: 'Lorem Ipsum',
      address: 'Lorem Ipsum',
      username: 'Lorem Ipsum',
      password: 'Lorem Ipsum',
      lock_user: 'Lorem Ipsum',
      photofilename: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    info
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_tax_computation', done => {
    const tax = new HrTaxComputation({
      tax_computation_id: 'Lorem Ipsum',
      use_annual_tax_table: 'Lorem Ipsum',
      non_tax_exemption_ceiling: 'Lorem Ipsum',
      start_of_annualization: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    tax
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_employee_email_address', done => {
    const email = new HrEmployeeEmailAddress({
      email_address_id: 123,
      emp_id: 'Lorem Ipsum',
      email: 'Lorem Ipsum',
      type: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    email
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_company_payroll_computation', done => {
    const payroll = HrCompanyPayrollComputation({
      companybasicid: 'Lorem Ipsum',
      periodpermonth: 'Lorem Ipsum',
      stationaryperiodschedule: 'Lorem Ipsum',
      absentdeduction_id: 'Lorem Ipsum',
      latededuction_id: 'Lorem Ipsum',
      ot_com_option_id: 'Lorem Ipsum',
      ot_rate_id: 'Lorem Ipsum',
      restday_id: 'Lorem Ipsum',
      newhireprorated_id: 'Lorem Ipsum',
      newhireprorated_type: 'Lorem Ipsum',
      deductabsent: 'Lorem Ipsum',
      deductlate: 'Lorem Ipsum',
      onethreemonthcomputation_id: 'Lorem Ipsum',
      finalcomputation_id: 'Lorem Ipsum',
      finalcomputation_deductabsent: 'Lorem Ipsum',
      finalcomputation_deductlate: 'Lorem Ipsum',
      notif_date: Date.now(),
      work_day_per_month: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    payroll
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_payroll', done => {
    const payroll = new HrPayroll({
      payroll_id: 123,
      payroll_year: 'Lorem Ipsum',
      payroll_month: 'Lorem Ipsum',
      employee_type: 'Lorem Ipsum',
      period: 'Lorem Ipsum',
      description: 'Lorem Ipsum',
      payroll_type: 'Lorem Ipsum',
      transaction_date: 'Lorem Ipsum',
      transaction_from: 'Lorem Ipsum',
      transaction_to: 'Lorem Ipsum',
      com_phic: 'Lorem Ipsum',
      com_sss: 'Lorem Ipsum',
      com_pagibig: 'Lorem Ipsum',
      com_tax: 'Lorem Ipsum',
      com_end_of_month: 'Lorem Ipsum',
      use_annual_calculation: 'Lorem Ipsum',
      post_status: 'Lorem Ipsum',
      process_status: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    payroll
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_employee_seminar', done => {
    const seminar = new HrEmployeeSeminar({
      seminar_id: 123,
      emp_id: 'Lorem Ipsum',
      seminar_date: 'Lorem Ipsum',
      seminar_name: 'Lorem Ipsum',
      instructor: 'Lorem Ipsum',
      seminar_nature: 'Lorem Ipsum',
      seminar_cost: 'Lorem Ipsum',
      seminar_returningserviceperiod: 'Lorem Ipsum',
      correspondingamount: 'Lorem Ipsum',
      seminar_note: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    seminar
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_payroll_new_hire_prorated_comp', done => {
    const payroll = new HrPayrollNewHireProratedComp({
      new_hire_prorated_comp_id: 'Lorem Ipsum',
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

  it('can write hr_form_template', done => {
    const template = new HrFormTemplate({
      form_template_id: 123,
      form_template_name: 'Lorem Ipsum',
      form_template_content: 'Lorem Ipsum',
      form_template_created_at: Date.now(),
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    template
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_employee_leavemanagement', done => {
    const leave = new HrEmployeeLeaveManagement({
      employee_leavemanagement_id: 123,
      emp_id: 'Lorem Ipsum',
      pat_mat_credit: 'Lorem Ipsum',
      sick_credit: 'Lorem Ipsum',
      leave_credit: 'Lorem Ipsum',
      vacation_leave: 'Lorem Ipsum',
      pat_mat_rem: 'Lorem Ipsum',
      sick_credit_rem: 'Lorem Ipsum',
      leave_credit_rem: 'Lorem Ipsum',
      vacation_credit_rem: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    leave
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_employee_job_detail', done => {
    const job = new HrEmployeeJobDetail({
      job_detail_id: 123,
      emp_id: 'Lorem Ipsum',
      position: 'Lorem Ipsum',
      department: 'Lorem Ipsum',
      cost_center: 'Lorem Ipsum',
      start_date: 'Lorem Ipsum',
      employment_status: 'Lorem Ipsum',
      status_effectve_date: 'Lorem Ipsum',
      daily_hour: 'Lorem Ipsum',
      employee_type: 'Lorem Ipsum',
      rohq: 'Lorem Ipsum',
      consultant: 'Lorem Ipsum',
      tin_number: 'Lorem Ipsum',
      philhealth_number: 'Lorem Ipsum',
      sss_number: 'Lorem Ipsum',
      hdmf_number: 'Lorem Ipsum',
      prc_license: 'Lorem Ipsum',
      passport: 'Lorem Ipsum',
      sl: 'Lorem Ipsum',
      vl: 'Lorem Ipsum',
      leave_credit: 'Lorem Ipsum',
      schedule_type: 'Lorem Ipsum',
      no_of_hours_to_work: 'Lorem Ipsum',
      notif_date: Date.now(),
      report_to: 'Lorem Ipsum',
      atc_s: 'Lorem Ipsum',
      atc_se: 'Lorem Ipsum',
      atc_sf: 'Lorem Ipsum',
      atc_swat: 'Lorem Ipsum',
      atc_s_se: 'Lorem Ipsum',
      atc_s_ss: 'Lorem Ipsum',
      atc_s_cf_status_code: 'Lorem Ipsum',
      atc_s_cf_V: 'Lorem Ipsum',
      atc_s_cf_VI: 'Lorem Ipsum',
      region: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    job
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_payroll_computation_restday', done => {
    const payroll = new HrPayrollComputationRestday({
      restday_id: 'Lorem Ipsum',
      sunday: 'Lorem Ipsum',
      monday: 'Lorem Ipsum',
      tuesday: 'Lorem Ipsum',
      wednesday: 'Lorem Ipsum',
      thursday: 'Lorem Ipsum',
      friday: 'Lorem Ipsum',
      saturday: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    payroll
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_company_basic_info', done => {
    const info = new HrCompanyBasicInfo({
      companybasicid: 'Lorem Ipsum',
      companylogofilename: 'Lorem Ipsum',
      companyname: 'Lorem Ipsum',
      natureofbusiness: 'Lorem Ipsum',
      address1: 'Lorem Ipsum',
      address2: 'Lorem Ipsum',
      zipcode: 'Lorem Ipsum',
      rdo: 'Lorem Ipsum',
      email: 'Lorem Ipsum',
      phone: 'Lorem Ipsum',
      fax: 'Lorem Ipsum',
      tin_number: 'Lorem Ipsum',
      sss_number: 'Lorem Ipsum',
      philhealth_number: 'Lorem Ipsum',
      hdmf: 'Lorem Ipsum',
      admin_signatory_name: 'Lorem Ipsum',
      admin_signatory_position: 'Lorem Ipsum',
      hr_signatory_name: 'Lorem Ipsum',
      hr_signatory_position: 'Lorem Ipsum',
      finance_signatory_name: 'Lorem Ipsum',
      finance_signatory_position: 'Lorem Ipsum',
      sss_contribution: 'Lorem Ipsum',
      philhealth_contribution: 'Lorem Ipsum',
      esignatoryfilename: 'Lorem Ipsum',
      hdmf_equ_empr_share: 'Lorem Ipsum',
      hdmf_share_value: 'Lorem Ipsum',
      notif_date: Date.now(),
      deduction_period: 'Lorem Ipsum',
      created_at: Date.now(),
      updated_at: Date.now()
    });

    info
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_reference_sss_table', done => {
    const reference = new HrReferenceSSSTable({
      sss_table_id: 123,
      min_range: 'Lorem Ipsum',
      max_range: 'Lorem Ipsum',
      monthly_salary_credit: 'Lorem Ipsum',
      ss_er: 'Lorem Ipsum',
      ss_ee: 'Lorem Ipsum',
      ss_total: 'Lorem Ipsum',
      ec_er: 'Lorem Ipsum',
      total_contribution: 'Lorem Ipsum',
      seumofw_total_contribution: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    reference
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it('can write hr_employee_emergency_contact', done => {
    const contact = new HrEmployeeEmergencyContact({
      emergency_contact_id: 123,
      emp_id: 'Lorem Ipsum',
      phone_number: 'Lorem Ipsum',
      contact_person: 'Lorem Ipsum',
      relationship: 'Lorem Ipsum',
      address: 'Lorem Ipsum',
      notif_date: Date.now(),
      created_at: Date.now(),
      updated_at: Date.now()
    });

    contact
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });
});
