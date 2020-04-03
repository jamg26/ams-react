import React from 'react';
import { PageHeader, Tabs } from 'antd';
import NewAsset from './components/new';
import ViewAsset from './components/view';
import AssetInfo from './components/info';

const Asset = props => {
  const { TabPane } = Tabs;
  return (
    <div>
      <PageHeader title='Asset' />
      <Tabs defaultActiveKey='1' size='large'>
        <TabPane tab='View Assets' key='view'>
          <ViewAsset />
        </TabPane>
        <TabPane tab='New Asset' key='new'>
          <NewAsset />
        </TabPane>
        <TabPane tab='Asset Information' key='info'>
          <AssetInfo />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Asset;
