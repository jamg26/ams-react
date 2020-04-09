import React from 'react';
import axios from 'axios';
import { PageHeader, Tabs, Button } from 'antd';
import NewAsset from './components/new';
import ViewAsset from './components/view';
import AssetInfo from './components/info';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

import { api_base_url } from '../../../../keys';
import AssetSetupModal from '../../../inc/AssetSetupModal';
const { TabPane } = Tabs;

class Asset extends React.Component {
  state = {
    show_asset_setup_modal: false,
    asset_setup_list: [],
  };

  get_asset_setup_list = async () => {
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axios.get(api_base_url + '/api/asset_setup_list', {
      headers: headers,
    });

    console.log(response.data);
    this.setState({ asset_setup_list: response.data });
  };

  componentDidMount() {
    this.get_asset_setup_list();
  }

  changeTab = (tab) => {
    this.props.gotoTab(tab);
  };

  render() {
    return [
      <div key={0}>
        <PageHeader title='Asset' />
        <AssetSetupModal
          show={this.state.show_asset_setup_modal}
          close={() => this.setState({ show_asset_setup_modal: false })}
          data={this.state.asset_setup_list}
        />
        <Tabs
          defaultActiveKey='1'
          activeKey={this.props.tab}
          onChange={this.changeTab}
          size='large'
          tabBarExtraContent={
            <Button
              type='link'
              onClick={() => {
                this.setState({ show_asset_setup_modal: true });
              }}
            >
              Asset Setup and Reference
            </Button>
          }
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
      </div>,
    ];
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.tab_asset_parent,
  };
};

export default connect(mapStateToProps, actions)(Asset);
