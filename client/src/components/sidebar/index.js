import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
const { SubMenu, Item } = Menu;

const hr = [
  { path: 'hr-dashboard', name: 'HR Dashboard' },
  { path: 'employee-list', name: 'Employee List' },
  { path: 'add-employee', name: 'Add Employee' },
  { path: 'view-employee', name: 'View Employee' },
  { path: 'cash-advance', name: 'Cash Advance' },
  { path: 'form-generator', name: 'Form Generator' },
  { path: 'memo', name: 'Memo' }
];

const payroll = [
  { path: 'payroll-dashboard', name: 'Payroll Dashboard' },
  { path: 'create-payroll', name: 'Create Payroll' },
  { path: 'employee', name: 'Employee' },
  { path: 'payroll-report', name: 'Payroll Report' },
  { path: 'govt-report', name: 'Government Report' }
];

const asset = [
  { path: 'asset-dashboard', name: 'Asset Dashboard' },
  { path: 'asset', name: 'Asset' },
  { path: 'asset-transaction', name: 'Transaction' },
  { path: 'asset-audit', name: 'Audit' },
  { path: 'asset-report', name: 'Report' },
  { path: 'asset-qr', name: 'Print QR' }
];

const Sidebar = props => {
  return (
    <div>
      <div
        style={{
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          paddingTop: 100
        }}
      >
        <p>jammmg26@gmail.com</p>
        <p>"temp_acc"</p>
      </div>
      <hr />
      <Menu theme='dark'>
        <Item>
          <Link to='bulletin'>Bulletin</Link>
        </Item>
        <Item>
          <Link to='ceo'>CEO</Link>
        </Item>
        <SubMenu title='HR'>
          {hr.map((hr, index) => {
            return (
              <Item key={index}>
                <Link to={hr.path}>{hr.name}</Link>
              </Item>
            );
          })}
        </SubMenu>
        <SubMenu title='Payroll'>
          {payroll.map((hr, index) => {
            return (
              <Item key={index}>
                <Link to={hr.path}>{hr.name}</Link>
              </Item>
            );
          })}
        </SubMenu>
        <SubMenu title='Asset Management'>
          {asset.map((hr, index) => {
            return (
              <Item key={index}>
                <Link to={hr.path}>{hr.name}</Link>
              </Item>
            );
          })}
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;
