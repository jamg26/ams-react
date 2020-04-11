import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

import CheckOut from './components/check-out';
import CheckIn from './components/check-in';
import Dispose from './components/dispose';
import Recover from './components/recover';
import Maintenance from './components/maintenance';

const Transaction = (props) => {
  const { TabPane } = Tabs;
  useEffect(() => {
    const getAssets = async () => {
      await props.getAssets();
    };
    getAssets();
  }, []);

  return (
    <div>
      <Tabs defaultActiveKey='checkOut' size='large'>
        <TabPane tab='Check Out' key='checkOut'>
          <CheckOut />
        </TabPane>
        <TabPane tab='Check In' key='checkIn'>
          <CheckIn />
        </TabPane>
        <TabPane tab='Move/Assign To' key='moveAssignTo'>
          Move/Assign To
        </TabPane>
        <TabPane tab='Dispose' key='dispose'>
          <Dispose />
        </TabPane>
        <TabPane tab='Recover' key='recover'>
          <Recover />
        </TabPane>
        <TabPane tab='Maintenance' key='maintenance'>
          <Maintenance />
        </TabPane>
        <TabPane tab='Extend Check Out' key='extendCheckOut'>
          Extend Checkout
        </TabPane>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    assets: state.assets,
  };
};

export default connect(mapStateToProps, actions)(Transaction);
