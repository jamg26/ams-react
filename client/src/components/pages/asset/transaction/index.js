import React from 'react';
import { Tabs } from 'antd';
import CheckOut from './components/check-out';
import CheckIn from './components/check-in';

const Transaction = (props) => {
  const { TabPane } = Tabs;
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
          Dispose
        </TabPane>
        <TabPane tab='Recover' key='recover'>
          Recover
        </TabPane>
        <TabPane tab='Maintenance' key='maintenance'>
          Maintenance
        </TabPane>
        <TabPane tab='Extend Check Out' key='extendCheckOut'>
          Extend Checkout
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Transaction;
