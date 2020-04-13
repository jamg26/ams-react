import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../layout';

const routes = [
  { path: '/bulletin', exact: false },
  { path: '/ceo', exact: false },
  { path: '/hr-dashboard', exact: false },
  { path: '/employee-list', exact: false },
  { path: '/add-employee', exact: false },
  { path: '/cash-advance', exact: false },
  { path: '/view-employee', exact: false },
  { path: '/form-generator', exact: false },
  { path: '/memo', exact: false },
  { path: '/payroll-dashboard', exact: false },
  { path: '/create-payroll', exact: false },
  { path: '/employee', exact: false },
  { path: '/payroll-report', exact: false },
  { path: '/govt-report', exact: false },
  { path: '/asset-dashboard', exact: false },
  { path: '/asset', exact: false },
  { path: '/asset-transaction', exact: false },
  { path: '/asset-audit', exact: false },
  { path: '/asset-report', exact: false },
  { path: '/asset-qr', exact: false }
];

const Routes = () => {
  return routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        component={Layout}
        exact={route.exact}
      />
    );
  });
};

export default Routes;
