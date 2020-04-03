import React from 'react';
import { Tabs } from 'antd';
import General from './components/General';
import Attachment from './components/Attachment';

const New = props => {
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
      </Tabs>
    </div>
  );
};

export default New;
