import React from 'react';
import AssetForm from '../../../../../../shared/AssetForm';
import { connect } from 'react-redux';
import * as actions from '../../../../../../../actions/';

const General = (props) => {
  const onFinish = async (values) => {
    await props.newAsset(values);
    await props.getAssets();
    props.gotoTab('view');
  };

  return <AssetForm onFinish={onFinish} count={props.assetCount} />;
};

const mapStateToProps = (state) => {
  return {
    assetCount: state.assets.assets?.length,
  };
};

export default connect(mapStateToProps, actions)(General);
