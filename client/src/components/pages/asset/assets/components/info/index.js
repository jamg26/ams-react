import React from 'react';
import { Tabs } from 'antd';
import General from './components/General';
import Attachment from './components/Attachment';
import Logs from './components/AssetLog';

const Info = (props) => {
  const { TabPane } = Tabs;
  return (
    <div>
      <Tabs defaultActiveKey='1' size='small'>
        <TabPane tab='General' key='general'>
          <General />
        </TabPane>
        <TabPane tab='Attachment' key='attachment'>
          <Attachment />
        </TabPane>
        <TabPane tab='Asset Logs' key='logs'>
          <Logs />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Info;
