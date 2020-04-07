import React from 'react';
import AssetForm from '../../../../../../shared/AssetForm';
import { connect } from 'react-redux';
import * as actions from '../../../../../../../actions/';

const General = (props) => {
  const onFinish = (values) => {
    props.newAsset(values);
    props.gotoTab('view');
    props.getAssets();
  };

  return <AssetForm onFinish={onFinish} />;
};

export default connect(null, actions)(General);
