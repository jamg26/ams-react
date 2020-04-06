import React from 'react';
import { PageHeader, Tabs, Button } from 'antd';
import NewAsset from './components/new';
import ViewAsset from './components/view';
import AssetInfo from './components/info';

import AssetSetupModal from '../../../inc/AssetSetupModal';
const { TabPane } = Tabs;
class Asset extends React.Component  {
  state = {
    show_asset_setup_modal : false
  }

  render (){
    return [
      <div>
      <PageHeader title='Asset' />
      <AssetSetupModal show={this.state.show_asset_setup_modal} close={()=>this.setState({show_asset_setup_modal : false })} />
      <Tabs defaultActiveKey='1' size='large' tabBarExtraContent={<Button type="link" onClick={()=>{this.setState({show_asset_setup_modal : true })}}>Asset Setup and Reference</Button>}>
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
    ]
  }
    

};

export default Asset;
