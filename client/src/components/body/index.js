import React from 'react';
import Bulletin from '../pages/bulletin';
import Ceo from '../pages/ceo';
import HrDashboard from '../pages/hr';
import AddEmployee from '../pages/hr/AddEmployee';
import CashAdvance from '../pages/hr/CashAdvance';
import EmployeeList from '../pages/hr/EmployeeList';
import ViewEmployee from '../pages/hr/ViewEmployee';
import FormGenerator from '../pages/hr/FormGenerator';
import Memo from '../pages/hr/Memo';
import PayrollDashboard from '../pages/payroll';
import CreatePayroll from '../pages/payroll/create';
import PayrollEmployee from '../pages/payroll/employee';
import GovtReport from '../pages/payroll/govt-report';
import PayrollReport from '../pages/payroll/report';
import AssetDashboard from '../pages/asset';
import Asset from '../pages/asset/asset-list';
import AssetAudit from '../pages/asset/audit';
import AssetReport from '../pages/asset/report';
import AssetTransaction from '../pages/asset/transaction';
import AssetPrintQr from '../pages/asset/print-qr';

const Body = props => {
  const { navigation } = props;

  const navigate = () => {
    switch (navigation) {
      case '/bulletin':
        return <Bulletin />;
      case '/ceo':
        return <Ceo />;
      case '/hr-dashboard':
        return <HrDashboard />;
      case '/add-employee':
        return <AddEmployee />;
      case '/employee-list':
        return <EmployeeList />;
      case '/cash-advance':
        return <CashAdvance />;
      case '/view-employee':
        return <ViewEmployee />;
      case '/form-generator':
        return <FormGenerator />;
      case '/memo':
        return <Memo />;
      case '/payroll-dashboard':
        return <PayrollDashboard />;
      case '/create-payroll':
        return <CreatePayroll />;
      case '/employee':
        return <PayrollEmployee />;
      case '/payroll-report':
        return <PayrollReport />;
      case '/govt-report':
        return <GovtReport />;
      case '/asset-dashboard':
        return <AssetDashboard />;
      case '/asset':
        return <Asset />;
      case '/asset-transaction':
        return <AssetTransaction />;
      case '/asset-audit':
        return <AssetAudit />;
      case '/asset-report':
        return <AssetReport />;
      case '/asset-qr':
        return <AssetPrintQr />;
      default:
        return 'Not found.';
    }
  };

  return <div style={{ padding: 30 }}>{navigate()}</div>;
};

export default Body;
