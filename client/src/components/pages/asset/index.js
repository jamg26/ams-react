import React from 'react';
import { Row, Col, Button, Empty } from 'antd';
import { FlagTwoTone } from '@ant-design/icons';
import NewRequests from './dashboard_components/new_request';
import ApprovedRequests from './dashboard_components/approved_request';
import RequestLogs from './dashboard_components/request_logs';
import CheckedOutAssets from './dashboard_components/checked_out_assets';
import MaintenanceAssets from './dashboard_components/maintanance_assets';
import DeniedNewAsset from './dashboard_components/denied_new_assets';

class Dashboard extends React.Component {
  render() {
    return [
      <div>
        <DeniedNewAsset />
        <NewRequests />
        <ApprovedRequests />
        <RequestLogs />
        <CheckedOutAssets />
        <MaintenanceAssets />
      </div>,
    ];
  }
}
export default Dashboard;
