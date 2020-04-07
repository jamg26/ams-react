import React from 'react';
import { PageHeader, Tabs } from 'antd';
import NewAsset from './components/new';
import ViewAsset from './components/view';
import AssetInfo from './components/info';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

const Asset = (props) => {
  const { TabPane } = Tabs;

  const changeTab = (tab) => {
    props.gotoTab(tab);
  };

  return (
    <div>
      <PageHeader title='Asset' />
      <Tabs
        defaultActiveKey='view'
        size='large'
        activeKey={props.tab}
        onChange={changeTab}
      >
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

const mapStateToProps = (state) => {
  return {
    tab: state.tab_asset_parent,
  };
};

export default connect(mapStateToProps, actions)(Asset);
